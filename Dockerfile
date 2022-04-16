FROM node:17

WORKDIR /usr/app

COPY ["./package.json", "yarn.lock", "./"]

COPY ["./apps/api/package.json", "./apps/api/package.json"]
COPY ["./apps/docs/package.json", "./apps/docs/package.json"]
COPY ["./apps/web/package.json", "./apps/web/package.json"]

COPY ["./packages/config/package.json", "./packages/config/package.json"]
COPY ["./packages/tsconfig/package.json", "./packages/tsconfig/package.json"]
COPY ["./packages/ui/package.json", "./packages/ui/package.json"]

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3310 3311 3312

CMD ["yarn", "dev"]
