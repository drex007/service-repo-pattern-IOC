import {Request, Response, NextFunction} from 'express'
import { BaseMiddleware } from '../base.middleware'
import { CreateSubscriberDto } from '@logic/dtos'

export class ValidateRequestMiddleWare extends BaseMiddleware{
  // constructor(
  //   private readonly _DtoClass:CreateSubscriberDto,
   
  // ) {
  //   super()
  // }
 

  public  execute(req:Request, res: Response, next: NextFunction): void | Promise<void>{
    //Mapping the request body to our CreateSubscribersDto
    req.body = CreateSubscriberDto.from(req.body)
  
  
next()
  }

  static with(){
    return new ValidateRequestMiddleWare().execute
  }

  // static withParams(dto:any){
  //   return new ValidateRequestMiddleWare(dto, true).execute
  // }
} 