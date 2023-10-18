import 'dotenv/config'
import 'reflect-metadata'

import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import express from 'express'
import '../controllers'
import { DBService } from '../services/db.service'
import { container } from '../containers.binds'

export class App{
 async setup(){
  const _db =  container.get(DBService)
  await _db.connect()
  
  const server = new InversifyExpressServer(container)
  server.setConfig((app)=>{
    app.use(express.json())
  })
  const app = server.build()
  app.listen(5000, ()=>{
    console.log('server connected and running on 5000')
  }
  )
 }

}