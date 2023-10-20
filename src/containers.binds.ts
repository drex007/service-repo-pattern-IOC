import {Container }from 'inversify'
import { DBService } from '@data/services/db.service'
import { SubscribersRepository } from '@data/repository/subscribers.repository'
import { SubscriberServices } from 'src/logic/services/subscribers.services'


export const  container = new Container({
  defaultScope:"Singleton"
})
//Binding for Database
container.bind(DBService).toSelf()
//Binding for Subscribers
container.bind(SubscribersRepository).toSelf()
container.bind(SubscriberServices).toSelf()