FROM node:10.13.0

# Create app directory
WORKDIR /usr/app

# Bundle app source
COPY . .

RUN yarn

EXPOSE 80
CMD [ "yarn", "start" ]