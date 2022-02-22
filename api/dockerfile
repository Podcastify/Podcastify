# syntax=docker/dockerfile:1
FROM node:14.0.0-buster-slim
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]