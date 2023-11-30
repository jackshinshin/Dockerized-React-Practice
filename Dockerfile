FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG port_num=3000

ENV VITE_portNumber=${port_num}

EXPOSE $VITE_portNumber

CMD [ "npm", "run", "dev" ]