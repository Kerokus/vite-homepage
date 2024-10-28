# Using an Alpine image to reduce overhead size
FROM node:18-alpine AS builder

# Set working directory pre-production
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Use a lightweight node environment to serve the application
FROM node:18-alpine

# Set working directory in the production image
WORKDIR /app

COPY --from=builder /app/dist ./dist

# Install a minimal HTTP server to serve static files
RUN npm install -g serve

# Command to serve the app (defaults to port 3000)
CMD ["serve", "-s", "dist"]
