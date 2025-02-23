FROM node:22.14.0

WORKDIR /usr/app

COPY package*.json yarn.lock ./

COPY . .

COPY prisma ./prisma/

RUN npm install  

CMD ["npm","run","prisma:db:deploy"]