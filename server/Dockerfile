FROM node:bullseye
WORKDIR /client
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /client
COPY package*.json ./  
RUN npm install
RUN apt-get update && apt-get install -y netcat
RUN npm install -g npm@9.6.4

# Bundle app source and copy the files to the image
COPY . .
# Expose the post so programs outside Docker 
# (Browser, Postman, etc) can access the server port 8000 
EXPOSE 8000
# When the image is finally run in a container, execute this:
CMD [ "npm", "run" ]

COPY ./db/schema.sql /docker-entrypoint-initdb.d/
COPY ./db/seeds.sql /docker-entrypoint-initdb.d/

#RUN COMMAND "docker compose up --build"