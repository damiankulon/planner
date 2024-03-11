FROM node:20.11.1

ENV NODE_ENV=production
WORKDIR /home/node/app

COPY ./package* ./
RUN npm install --prefer-offline --no-audit && \
   npm cache clean --force

USER node

COPY dist .

CMD ["node", "main.js"]
