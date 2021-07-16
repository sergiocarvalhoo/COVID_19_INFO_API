import { Request, Response, NextFunction } from "express";
import { AppErrors } from '../errors/AppErrors';

export function HandleExceptions(error: Error, 
    request: Request, 
    response: Response, 
    next: NextFunction){

        if(error instanceof AppErrors){
            return response.status(400).json({error: error.message})
        }

        return response.status(500).json({
            status: "Error",
            message: "Error Server Internal !"
        })
}