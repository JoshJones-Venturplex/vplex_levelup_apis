FROM root/alpine-node:10
ADD . /smoothie-nesdt
WORKDIR /smoothie-nest
COPY yarn.lock package.json ./
RUN yarn
COPY . .
RUN yarn build && mv build /public