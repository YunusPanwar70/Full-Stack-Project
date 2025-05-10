# Use base image
FROM node:18

# Set work directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build NestJS
RUN npm run build

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "run", "start:prod"]
