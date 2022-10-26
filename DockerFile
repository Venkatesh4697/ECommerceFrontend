#STAGE1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#STAGE2
FROM nginx:alpine
COPY --from=node /app/dist/ESHOP /usr/share/nginx/html