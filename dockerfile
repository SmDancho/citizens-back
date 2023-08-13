# Use an official Node.js runtime as the base image
FROM railwayapp/node:14
ARG EnvironmentVariable
ARG RAILWAY_ENVIRONMENT
ENV RAILWAY_ENVIRONMENT=$RAILWAY_ENVIRONMENT
# Set the working directory in the container
WORKDIR /dist

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port that your Express app will listen on
EXPOSE 5000


# Check if NODE_ENV is production and set APP_URL accordingly

# Command to run the app when the container starts
CMD npm start
