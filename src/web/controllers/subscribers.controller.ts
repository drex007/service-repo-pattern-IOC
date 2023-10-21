
import {controller, httpGet, httpPost, httpPatch, httpDelete } from 'inversify-express-utils'
import {Request, Response} from 'express'
import { SubscriberServices } from 'src/logic/services/subscribers.services';
import { CreateSubscriberDto } from '@logic/dtos';
import { ResponseSubscriberDto } from '@logic/dtos/subscribers/response.subscriber.dto';
import { ValidateRequestMiddleWare } from '../middleware/validate.request.middleware';

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

    @httpPost('/create', ValidateRequestMiddleWare.with(CreateSubscriberDto))
  async createSubscriber(req:Request, res:Response){  
    const dtoBody = CreateSubscriberDto.from(req.body)
    const subscriber = await this._subscriberServices.createSubscriber(dtoBody)
    
    return res.status(201).json({
      data: subscriber
    })
  }

@httpPatch('/:id')
  async updateSusbcriber(req:Request, res:Response){
    const updated = await this._subscriberServices.updateSubscriber(req.params.id, req.body)
    if(updated){
        const dtoResponse =   ResponseSubscriberDto.from(updated)
        return res.status(200).json({data: dtoResponse})
    }

    return res.status(400).json({error:"No object with this id"})
    
  }

@httpDelete('/:id')
  async deleteSusbcriber(req:Request, res:Response){
     await this._subscriberServices.deleteSubscriber(req.params.id)
    res.status(200).json({data: {message:"Subscriber deleted"}})
  }
   
}