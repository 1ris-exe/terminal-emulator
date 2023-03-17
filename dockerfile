FROM node:16-alpine as base

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
RUN npm install express
RUN npm install openai
RUN npm install dotenv

COPY . .

CMD ["npm", "start"]
EXPOSE 3000