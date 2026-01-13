<<<<<<< HEAD
# import image node versi 18 alpine
FROM node:18-alpine

# set working directory di dalam container
WORKDIR /usr/src/app

# copy file package.json dan package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy seluruh source code ke container
COPY . .

# expose port sesuai app.js (default 3000)
EXPOSE 2562

# jalankan aplikasi
CMD ["npm", "start"]
=======
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
>>>>>>> 7125d3e05be5b6529849626280afb9309f57892f
