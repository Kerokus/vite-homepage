# Use a small Node.js image for the build
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# Use a lightweight node environment to serve the application
FROM node:18-alpine

# Set working directory in the production image
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/dist ./dist

# Install a minimal HTTP server to serve static files
RUN npm install -g serve

# Command to serve the app
CMD ["serve", "-s", "dist"]
