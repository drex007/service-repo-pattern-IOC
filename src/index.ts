import 'dotenv/config'
import 'reflect-metadata'

import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import express from 'express'
// import './controllers'
import { App } from './web/application'

/* --- Do this as last! --- */

// NOTE: Make sure to do a named export of your userController
console.clear()
export async function runServer(){
  const app = new App()
  app.setup()

}

runServer()
