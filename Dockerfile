FROM node:8.9.4-alpine
EXPOSE 8080
COPY . .
CMD node server.js