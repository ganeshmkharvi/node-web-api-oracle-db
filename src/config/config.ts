import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') })

export default {
    user: process.env.USER_ID,
    port: process.env.PORT, 
    password: process.env.PASSWORD,
    connectString: process.env.CONNECT_STRING,
    jwk: JSON.parse(process.env.JWK)
};