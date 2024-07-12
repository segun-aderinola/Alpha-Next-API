# Use the official Node.js image as the base image
FROM node:14

# Install netcat
RUN apt-get update && apt-get install -y netcat

# Create and change to the app directory
WORKDIR /Users/macbook/Downloads/projects/alpha-next-backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the wait-for-it.sh script
COPY wait-for-it.sh /Users/macbook/Downloads/projects/alpha-next-backend/wait-for-it.sh
RUN chmod +x /Users/macbook/Downloads/projects/alpha-next-backend/wait-for-it.sh

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["sh", "-c", "until nc -z mysql 3306; do echo 'Waiting for MySQL...'; sleep 5; done && npm start"]
