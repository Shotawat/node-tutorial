FROM node:8.9.4-alpine
EXPOSE 3310
COPY . .
CMD node server.js