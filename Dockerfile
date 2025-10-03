FROM node:18-alpine
RUN mkdir node
COPY . ./node
WORKDIR ./node/
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]