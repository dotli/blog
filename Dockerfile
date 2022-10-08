FROM node:latest AS build-stage

COPY . /blog

WORKDIR /blog

RUN corepack enable && pnpm install && pnpm build

FROM nginx:alpine

LABEL dotli.cn/author="dotli"
LABEL dotli.cn/description="Dotli's personal blog"

#RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /blog/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /blog/.vuepress/dist /usr/share/nginx/html

EXPOSE 80