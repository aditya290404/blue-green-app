FROM node:18
WORKDIR /app
COPY . .
RUN npm install
ENV VERSION=BLUE
CMD ["node", "index.js"]
