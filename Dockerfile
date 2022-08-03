FROM node:14
WORKDIR /build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
WORKDIR /
RUN mkdir /app
RUN mv /build/.output/* /app
RUN rm -r /build
CMD ["node", "/app/server/index.mjs"]