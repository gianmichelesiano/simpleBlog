FROM node:14

# Create app directory
WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]

#sudo docker build -t simple_blog:1.0.0 .
# sudo docker run -p 3000:8080 simple_blog:1.0.0


