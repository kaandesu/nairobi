FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run generate

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /app/.output/public ./

EXPOSE 80
