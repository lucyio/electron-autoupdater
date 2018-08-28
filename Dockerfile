FROM node:10.7.0

# Create app directory
WORKDIR /usr/app

# Bundle app source
COPY . .

RUN yarn

EXPOSE 3000
CMD [ "yarn", "start" ]