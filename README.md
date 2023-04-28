

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# Nike Clone

## Description
Clone of a retail product page, inherited from a group of colleagues. Tasked with optimizing the application and to make the application ready to scale both users and data served.

## Table of Contents
* [Installation](#installation)
* [Technologies](#technologies)
* [Screenshot](#screenshot)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license) 

## Installation
1. Fork/clone the repository to your local machine
2. Make sure you have Docker installed to run the backend
3. Navigate to the server folder and run 'docker compose up --build'
4. Verify the docker containers/images/volumes are built, and the servers are running, and waiting for connections
5. Run 'redis-cli' in a new terminal to verify the connection to Redis
6. Run 'keys *' to check whether the database has been cached *Note: you will not see the data in the cache until you have made at lease 1 call to the endpoint, you can do this by using sending a GET request through Postman, or Insomnia to localhost:8000/api/shoes
7. To view the application in your local browser, navigate to the client directory in a new terminal and run 'npm run start'

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

