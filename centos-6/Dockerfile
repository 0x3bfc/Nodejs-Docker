FROM    centos:centos6

MAINTAINER Ahmed Abdullah <ahmedaabdulwahed@gmail.com>

# update yum repo
RUN yum -y update

# Install Node.js and npm
RUN curl -sL https://rpm.nodesource.com/setup | bash -
RUN yum install -y nodejs --nogpgcheck


# Bundle app source
COPY nodejs /nodejs

# Install app dependencies
WORKDIR	/nodejs
RUN npm install


EXPOSE  80
CMD ["node", "/nodejs/index.js"]
