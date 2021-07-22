import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { PayloadType } from '../dataio/PayloadType'

export function verifyTokenAuthentication(request: Request, response:Response, next:NextFunction){

    const token = request.headers.authorization;
    console.log(token);

    if(!token){
        return response.status(401).json({message:"The Token is Missing !"})
    }

    const tokenCripto = token.split(" ");

    try {
        const {sub, email} = verify(tokenCripto[1], process.env.TOKEN_KEY) as PayloadType;
        //console.log(payload);
        request.registration = sub;
        request.administrator_email = email;
        return next();
    }
    catch (error) {
        return response.status(401).json({message:"The Token is Not Valid !"})
    }

} 