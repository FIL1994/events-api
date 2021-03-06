FROM node:lts-jessie-slim
EXPOSE 3000

WORKDIR /usr/local/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .