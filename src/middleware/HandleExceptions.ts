import { Request, Response, NextFunction } from "express";
import { ValidationError } from "yup";
import { AppErrors } from '../errors/AppErrors';


interface IValidationErrors{
    [key: string]:string[];
}

export function HandleExceptions(error: Error, 
    request: Request, 
    response: Response, 
    next: NextFunction){

        if(error instanceof AppErrors){
            return response.status(error.statusCode).json({error: error.message})
        }
        else if(error instanceof ValidationError){
            let errors: IValidationErrors= {}
            error.inner.forEach(e =>{
                errors[e.path] = e.errors;
            })

            return response.status(400).json({message:"A Validation Error Occurred:", errors});
        }

        return response.status(500).json({
            status: "Internal Server Error",
            message: "The request was not completed due to an internal error on the server side. !",
            error: error.message
        })
}
