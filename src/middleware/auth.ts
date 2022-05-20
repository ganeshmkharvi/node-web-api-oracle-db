import jwt from "jsonwebtoken";
import * as constants from "../utility/constants";
import jwkToPem  from 'jwk-to-pem';
import config from "../config/config";

export const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];
    let errMessage = null;

    if (!token) {
        return res.status(constants.statusCode403).send({ message: constants.tokenRequired });
    }
    try {
        const pem = jwkToPem(config.jwk.keys[0]);
        jwt.verify(token, pem, { algorithms: ['RS256'] }, function(err, decodedToken) {
            console.log('decodedToken: ', decodedToken);
            errMessage = err;
        });
    } catch (err) {
        console.log('catch:', err);
        return res.status(constants.statusCode401).send({ message: constants.invalidToken });
    }
    
    if(errMessage) {
        return res.status(constants.statusCode401).send({ message: errMessage });
    }

    return next();
};
