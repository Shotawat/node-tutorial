FROM node:8.9.4-alpine
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3310
CMD [ "npm", "start" ]