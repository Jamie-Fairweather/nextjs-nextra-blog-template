ARG NODE_VERSION=24.11.1
FROM node:${NODE_VERSION}-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# ---
    FROM base AS prepare
    COPY . .

# ---
    FROM base AS builder
    COPY . .
    RUN pnpm install
    RUN pnpm build

# ---
    FROM node:${NODE_VERSION}-alpine AS runner
    # Don't run production as root for security reasons
    RUN addgroup --system --gid 1001 nodejs
    RUN adduser --system --uid 1001 nextjs
    USER nextjs

    # Automatically leverage output traces to reduce image size
    # https://nextjs.org/docs/advanced-features/output-file-tracing
    COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
    COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
    # COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

    EXPOSE 3000
    ENV PORT=3000
    ENV HOSTNAME="0.0.0.0"

    CMD node apps/web/server.js