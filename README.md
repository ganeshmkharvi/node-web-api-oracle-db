<p align="center">
  <h3 align="center">Node.js web api with Oracle DB connectivity and authentication with your AWS cognito hosted UI token</h3>
  <p align="center">
    <a href="https://github.com/ganeshmkharvi/node-web-api-oracle-db/issues">Report Bug </a>
    ·
    <a href="https://github.com/ganeshmkharvi/node-web-api-oracle-db/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

### What's inside this repo?

- Nodejs web api with Oracle DB connectivity.
- Existing code creates a table and selects the records and returns the same in a GET api (/api/welcome)

### Task description

There is only 1 Get api i.e. /api/welcome which returns few records that have been created in oracledb in the nodejs code. You will get all the details in the postman collection inside this repo. To access the api you would require a jwt token which you would get from id_token query string in your call back url that you get after login from your coginito hosted url.


### Built With

- [Node.js]() - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [OracleDB]() - Oracle database as the backend.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps :

### Prerequisites

To run this project, you'll need to have the following installed:

- Node.js : [https://nodejs.org](https://nodejs.org)

- npm :
  ```sh
  npm install npm@latest -g
  ```
- OracleDB
> <br>

### Installation

1. Clone the repo :
   ```sh
   git clone https://github.com/ganeshmkharvi/node-web-api-oracle-db.git
   ```
2. Install dependencies (use `sudo` if required) :

   ```sh
   npm install
   ```
3. Create .env file and configure :

    ```sh
    PORT = <PORT>
    USER_ID = <USER_ID>
    PASSWORD = <PASSWORD>
    CONNECT_STRING = <CONNECT_STRING>
    JWK= <JWK>
    ```
  You can locate JWK it by constructing the following URL for your environment:
  https://cognito-idp.{region}.amazonaws.com/{userPoolId}/.well-known/jwks.json
  
4. Start the server :

    ```sh
    npm start
    ```
