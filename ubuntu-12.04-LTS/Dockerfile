FROM	ubuntu:12.04

MAINTAINER Ahmed Abdullah <ahmedaabdulwahed@gmail.com>


# Update apt-get repo
RUN apt-get update -y
RUN apt-get install -y python-software-properties g++ make
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update -y

# Install Node.js and npm
RUN apt-get install -y nodejs


# Bundle app source
COPY nodejs /nodejs

# Install app dependencies
WORKDIR /nodejs
RUN npm install

EXPOSE  80
CMD ["node", "/nodejs/index.js"]

