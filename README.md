

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# Nike Clone

## Description
Clone of a retail product page, inherited from a group of colleagues. Tasked with optimizing the application and to make the application ready to scale both users and data served. Integrated a Redis caching layer to reduce the time it takes to get data from the database to the user. Caching layer resulted in ~50% faster response.

## Table of Contents
* [Installation](#installation)
* [Technologies](#technologies)
* [Screenshot](#screenshot)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license) 

## Installation
1. Fork/clone the repository to your local machine
2. From the root directory, inside the server directory, and inside the client directory run 'npm install' (3 times total)
3. Make sure you have Docker installed and running to run the backend
4. Navigate to the server folder and run 'docker compose up --build'
5. Verify the docker containers/images/volumes are built, and the servers are running, and waiting for connections
6. Run 'redis-cli' in a new terminal to verify the connection to Redis
7. Run 'keys *' to check whether the database has been cached *Note: you will not see the data in the cache until you have made at lease 1 call to the endpoint, you can do this by using sending a GET request through Postman, or Insomnia to localhost:8000/api/shoes
8. To view the application in your local browser, navigate to the client directory in a new terminal and run 'npm run start'

## Technologies
1. PostgreSQL
2. Express.js
3. React
4. Node.js
5. Redis
6. k6
7. Axios

## Screenshot
![alt text](/assets/images/nike-clone-screenshot.png)

## Tests
Postman

## Questions
Contact information (email address & GitHub username) of the developer
kevin.o.foreman2@gmail || kevin-foreman(Github)

## License

The license used for this project is MIT

