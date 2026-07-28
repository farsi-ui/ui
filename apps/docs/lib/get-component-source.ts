/**
 * Read component source code from the file system
 * Used at build time to populate component source code in components-data
 * Only works in Node.js environment (server-side)
 */
export function getComponentSource(filePath: string): string {
  // Only run on server side
  if (typeof window !== "undefined") {
    return "";
  }

  try {
    const { readFileSync } = require("fs");
    const { join } = require("path");

    const cwd = process.cwd();
    const isDocsApp = cwd.includes(`${join("apps", "docs")}`);
    const workspaceRoot = isDocsApp ? join(cwd, "..", "..") : cwd;
    const sourcePath = filePath.startsWith("components/ui/")
      ? join(workspaceRoot, "packages", "react", "src", filePath)
      : join(cwd, filePath);

    return readFileSync(sourcePath, "utf-8");
  } catch (error) {
    console.warn(`Failed to read component source from ${filePath}:`, error);
    return "";
  }
}

/**
 * Format component source code for display
 * Optionally truncate long files or add line numbers
 */
export function formatComponentSource(
  source: string,
  options?: {
    maxLines?: number;
    addLineNumbers?: boolean;
  }
): string {
  if (!source) return "";

  let lines = source.split("\n");

  // Truncate if maxLines is specified
  if (options?.maxLines && lines.length > options.maxLines) {
    lines = lines.slice(0, options.maxLines);
    lines.push("... (truncated)");
  }

  // Add line numbers if requested
  if (options?.addLineNumbers) {
    lines = lines.map((line, index) => `${String(index + 1).padStart(4, " ")} | ${line}`);
  }

  return lines.join("\n");
}
