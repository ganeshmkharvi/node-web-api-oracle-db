import http from "http";
import app from "../app";
import config from '../config/config';
import * as constants from "../utility/constants";

const server = http.createServer(app);

const port = config.port || 3001;

// server listening 
server.listen(port, () => {
  console.log(`${constants.serviceRunning} ${port}`);
});
