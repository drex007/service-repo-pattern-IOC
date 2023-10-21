import {Request, Response, NextFunction} from 'express'
import { BaseMiddleware } from '../base.middleware'

export class ValidateRequestMiddleWare extends BaseMiddleware{
  constructor(private readonly _DtoClass:{from:any}, private readonly _withParams=false){
    super()
  }
  public  execute(req:Request, res: Response, next: NextFunction): void | Promise<void>{
    //Mapppting DtoInstance as a req.body
    if(this._withParams){
      req.body = {
        ...req.body,
        ...req.params
      }
    }
    req.body = this._DtoClass.from(req.body)
  
next()
  }

  static with(dto:any){
    return new ValidateRequestMiddleWare(dto, false).execute
  }

  static withParams(dto:any){
    return new ValidateRequestMiddleWare(dto, true).execute
  }
} 