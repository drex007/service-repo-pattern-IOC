import 'dotenv/config'
import 'reflect-metadata'
import { Request, Response, NextFunction } from 'express'

import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import express from 'express'
import './controllers'
import { DBService } from '@data/services/db.service'
import { container } from '../containers.binds'
import { HttpExceptions } from './exceptions/http.exceptions'
import morgan from 'morgan'

export class App{
 async setup(){
  const _db =  container.get(DBService)
  await _db.connect()
  
  const server = new InversifyExpressServer(container)
  server.setErrorConfig((app)=>{
    app.use((err:any, req:Request, res:Response, next:NextFunction)=> {
      if(err instanceof HttpExceptions){
        return res.status(err.statusCode).json({
          data:{},
          error:err.message
        })
      }
      next()
    })
  })
  server.setConfig((app)=>{
    app.use(express.json())
    app.use(morgan('dev')) // logging mode on when a user makes a request
  })
  const app = server.build()
  app.listen(5000, ()=>{
    console.log('server connected and running on 5000')
  }
  )
 }

}