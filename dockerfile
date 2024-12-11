# Use a lightweight Node.js base image
FROM node:lts-slim

# Set the working directory
WORKDIR /app

# Copy only the package files first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install --production && npm cache clean --force

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["npm", "start"]
