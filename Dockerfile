FROM node:8.7.0
WORKDIR /usr/src/app
RUN apt-get update && apt-get install sudo -y
COPY package*.json ./
COPY src ./src
RUN npm install
RUN npm run build
EXPOSE 8080

CMD npm run serve_only
