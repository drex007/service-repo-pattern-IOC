import {controller, httpGet, httpPost, httpPatch, httpDelete } from 'inversify-express-utils'
import { DBService } from 'src/services/db.service';
import {Request, Response} from 'express'
import { SubscriberServices } from 'src/services/subscribers.services';

@controller('/subscribers')
export class SubscribersController{
  constructor (private readonly  _subscriberServices: SubscriberServices){

  }
  @httpGet('/')
  async index(req:Request, res:Response){  
    const subscribers = await this._subscriberServices.getSubscribers()
    return res.json({
      data: subscribers
    })
  }

  @httpGet('/:id')
  async findOne(req:Request, res:Response){  
    const subscriber = await this._subscriberServices.findOne(req.params.id)
    return res.json({
      data: subscriber
    })
  }

    @httpPost('/create')
  async createSubscriber(req:Request, res:Response){  
    const subscriber = await this._subscriberServices.createSubscriber(req.body)
    return res.status(201).json({
      data: subscriber
    })
  }

@httpPatch('/:id')
  async updateSusbcriber(req:Request, res:Response){
    const updated = await this._subscriberServices.updateSubscriber(req.params.id, req.body)
    res.status(200).json({data: updated})
  }

@httpDelete('/:id')
  async deleteSusbcriber(req:Request, res:Response){
     await this._subscriberServices.deleteSubscriber(req.params.id)
    res.status(200).json({data: {message:"Subscriber deleted"}})
  }
   
}