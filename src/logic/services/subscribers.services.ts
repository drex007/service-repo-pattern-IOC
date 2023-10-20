import { SubscribersRepository } from "src/data/repository/subscribers.repository";
import {injectable} from 'inversify'
import { ISubscriber } from "src/data/interfaces";
import { CreateSubscriberDto } from "@logic/dtos";
import { ResponseSubscriberDto } from "@logic/dtos/subscribers/response.subscriber.dto";

@injectable()
export class SubscriberServices{
  constructor ( private readonly _subscriberRepo: SubscribersRepository){

  }

  async getSubscribers(){
    return this._subscriberRepo.all()
  }

  async findOne(id:string){
    return this._subscriberRepo.findOne(id)

  }

  async createSubscriber(createSubscriberDto: CreateSubscriberDto){
    const subscriber = await this._subscriberRepo.create(createSubscriberDto)
    return ResponseSubscriberDto.from(subscriber)

  }

  async updateSubscriber(id:string, createSubscriberDto:CreateSubscriberDto){
    return this._subscriberRepo.updateOne(id, createSubscriberDto)
  }

  async deleteSubscriber(id:string){
    return this._subscriberRepo.deleteOne(id)
  }
}