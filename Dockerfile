FROM node:12.16.1-alpine
USER node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm ci
COPY --chown=node:node . .
ENTRYPOINT ["npm", "start"]
