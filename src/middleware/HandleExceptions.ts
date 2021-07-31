import { Request, Response, NextFunction } from "express";
import { AppErrors } from '../errors/AppErrors';


export function HandleExceptions(error: Error, 
    request: Request, 
    response: Response, 
    next: NextFunction){

        if(error instanceof AppErrors){
            return response.status(error.statusCode).json({error: error.message})
        }

        return response.status(500).json({
            status: "Internal Server Error",
            message: "The request was not completed due to an internal error on the server side. !",
            error: error.message
        })
}
