# 1. Use official Node.js 18 image
FROM node:18

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package.json and package-lock.json (if you have it)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy all frontend code into container
COPY . .

# 6. Build Next.js app
RUN npm run build

# 7. Expose Next.js default port
EXPOSE 3000

# 8. Start Next.js in production mode
CMD ["npm", "start"]
