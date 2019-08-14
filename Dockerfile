FROM node:10

ENV NPM_CONFIG_LOGLEVEL=warn

WORKDIR /app/

ADD package.json package-lock.json gatsby-config.js gatsby-browser.js gatsby-node.js /app/
ADD dev /app/dev

CMD npm run develop

RUN npm install
