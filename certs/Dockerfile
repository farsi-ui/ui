FROM alpine:3.20

WORKDIR /app

# Install dependencies
RUN apk add --no-cache wget ca-certificates tar

# Download and extract gost
RUN wget https://github.com/go-gost/gost/releases/download/v3.0.0/gost_3.0.0_linux_amd64.tar.gz \
    && tar -xzf gost_3.0.0_linux_amd64.tar.gz \
    && mv gost /app/gost \
    && chmod +x /app/gost \
    && rm gost_3.0.0_linux_amd64.tar.gz

# Copy certs
COPY domain.crt /app/domain.crt
COPY domain.key /app/domain.key

EXPOSE 5000

CMD ["./gost", "-L", "mwss://ehsandev:ehsandev@:5000?path=/api/v1/updates&cert=domain.crt&key=domain.key"]