# Stage 1: Build the Angular app
FROM node:18 AS build

# Set the working directory
WORKDIR /pokemon

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm config set registry https://registry.npmjs.org/
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --omit=dev

# Stage 2: Serve the Angular app
FROM nginx:alpine

# Copy the build artifacts from the build stage
COPY --from=pokemon/dist/form-app/browser dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
