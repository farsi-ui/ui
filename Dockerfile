# ========================================
# Multi-Stage Dockerfile for Next.js Application
# ========================================

ARG NODE_VERSION=20-alpine
FROM docker.arvancloud.ir/node:20-alpine AS base

WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
  adduser -S nodejs -u 1001 -G nodejs && \
  chown -R nodejs:nodejs /app

# ========================================
# Dependencies Stage - Production Dependencies
# ========================================
FROM base AS deps

COPY package.json pnpm-lock.yaml ./

RUN npm config set registry "https://mirror-npm.runflare.com/"

# Install pnpm globally
RUN npm install -g pnpm@10.27.0

# Install production dependencies only
RUN --mount=type=cache,target=/root/.pnpm-store,sharing=locked \
  pnpm install --prod --frozen-lockfile && \
  pnpm store prune

RUN chown -R nodejs:nodejs /app

# ========================================
# Build Dependencies Stage - All Dependencies
# ========================================
FROM base AS build-deps

COPY package.json pnpm-lock.yaml ./

RUN npm config set registry "https://mirror-npm.runflare.com/"

# Install pnpm globally
RUN npm install -g pnpm@10.27.0

# Install all dependencies for building
RUN --mount=type=cache,target=/root/.pnpm-store,sharing=locked \
  pnpm install --frozen-lockfile && \
  pnpm store prune

RUN chown -R nodejs:nodejs /app

# ========================================
# Build Stage
# ========================================
FROM build-deps AS build

# Copy application source files
COPY --chown=nodejs:nodejs . .

RUN npm config set registry "https://mirror-npm.runflare.com/"

# Install pnpm globally
RUN npm install -g pnpm@10.27.0

# Build the Next.js application
RUN pnpm run build

RUN chown -R nodejs:nodejs /app

# ========================================
# Production Stage
# ========================================
FROM base AS production

# Set optimized environment variables
ENV NODE_ENV=production \
  NODE_OPTIONS="--max-old-space-size=256" \
  NEXT_TELEMETRY_DISABLED=1

# Copy all node_modules from build stage (includes TypeScript needed for config loading)
COPY --from=build --chown=nodejs:nodejs /app/node_modules ./node_modules

# Copy package files
COPY --from=build --chown=nodejs:nodejs /app/package.json ./

# Copy built application from build stage
COPY --from=build --chown=nodejs:nodejs /app/.next ./.next
COPY --from=build --chown=nodejs:nodejs /app/public ./public
COPY --from=build --chown=nodejs:nodejs /app/next.config.mjs ./

# Switch to non-root user for security
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start production server
CMD ["node_modules/.bin/next", "start", "-p", "3000"]

# # ========================================
# # Development Stage
# # ========================================
# FROM build-deps AS development

# # Set environment variables
# ENV NODE_ENV=development \
#   NEXT_TELEMETRY_DISABLED=1

# # Copy source files
# COPY --chown=nodejs:nodejs . .

# # Install pnpm globally
# RUN npm install -g pnpm@10.27.0

# # Pre-create .next directory with proper permissions
# RUN mkdir -p /app/.next && \
#   chmod -R 755 /app && \
#   chown -R nodejs:nodejs /app/.next

# # Switch to non-root user
# USER nodejs

# # Expose ports
# EXPOSE 3000

# # Start development server
# CMD ["pnpm", "dev"]
