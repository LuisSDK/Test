# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
# This step leverages Docker's layer caching.
COPY package.json ./
# If you're using yarn, uncomment the next line and comment out the npm ci line
COPY yarn.lock ./
# COPY package-lock.json ./

# Install project dependencies
# If you're using yarn, uncomment the next line and comment out the npm ci line
RUN yarn install --frozen-lockfile
#RUN npm ci

# Copy the rest of your application's source code into the container
# While docker-compose will mount the volume, this ensures the image can be built independently
# and provides initial files.
COPY . .

# Expose the port Storybook runs on (default is 6006)
EXPOSE 6006

# The command to start Storybook (can be overridden in docker-compose.yml)
# Ensure your package.json has a "storybook" script.
# Example: "storybook": "storybook dev -p 6006 -h 0.0.0.0"
# The -h 0.0.0.0 is important to allow access from outside the container.
CMD ["npm", "run", "storybook"]