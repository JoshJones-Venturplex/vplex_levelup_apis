FROM node:latest
RUN mkdir -p /smoothie-nest/src/app
WORKDIR /smoothie-nest/src/app
COPY wait-for-it.sh package-lock.json tsconfig.json package.json ./
RUN chmod +x ./wait-for-it.sh
RUN npm install
COPY . /smoothie-nest/src/app
EXPOSE 3306
EXPOSE 3000
CMD [ "./wait-for-it.sh", "mysql:3306", "--", "npm", "start" ]