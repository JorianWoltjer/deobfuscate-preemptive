FROM node:lts-alpine

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install

COPY deobfuscate.js ./

ENTRYPOINT ["node", "/usr/src/app/deobfuscate.js"]
