FROM node:16 AS build

WORKDIR /app

COPY . .

ARG NPM_REGISTRY=https://registry.npm.taobao.org

RUN npm install --registry=${NPM_REGISTRY} && npm run build

FROM node:16-alpine3.14

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/bootstrap.js ./
COPY --from=build /app/package.json ./

RUN apk add --no-cache tzdata
ENV TZ="Asia/Shanghai"

EXPOSE 8001

ENTRYPOINT ["npm", "start"]
