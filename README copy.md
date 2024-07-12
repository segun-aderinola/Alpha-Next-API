# Alpha-Next Backend

This project is a basic API for competitor analysis using Node.js, Express, Sequelize, and MySQL. The API allows for the creation and viewing of competitor profiles, which include metrics such as website traffic and top-performing pages.

## Table of Contents

- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)



## Prerequisites

- Docker installed on your machine.
- Docker Compose installed on your machine.

## Setup Instructions

1. Download the `docker-compose.yml` file.

2. Run Docker Compose to start the application:

    ```sh
    docker-compose up
    ```

3. Access the Node.js application:

    Open your web browser and go to `http://localhost:3000`.

## Stopping the Application

To stop the application and remove the containers, run:

```sh
docker-compose down


## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd alpha-next-backend
2. **Install dependencies:**
    ```bash
    npm install

## Database Setup
 1. **Edit the config file** 
 locate config/config.json file and update with your database credentials
 2. **Run the migration**
npx sequelize-cli db:migrate

## Running the Application
    Start the server:
    ```bash
    npm run start

## API Endpoints
    Documentation: https://documenter.getpostman.com/view/20769634/2sA3e48o2R

## Dependencies

express: Web framework for Node.js.
mysql2: MySQL client for Node.js.
sequelize: Promise-based Node.js ORM for MySQL.
sequelize-cli: Command-line interface for Sequelize.
nodemon: Utility that automatically restarts the server when file changes are detected.
@faker-js/faker: Library for generating fake data.


