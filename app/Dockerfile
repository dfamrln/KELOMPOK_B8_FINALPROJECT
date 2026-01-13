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
