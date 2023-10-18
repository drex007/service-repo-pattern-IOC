import { SubscribersRepository } from "src/repository/subscribers.repository";
import {injectable} from 'inversify'
import { ISubscriber } from "src/interfaces";

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

  async createSubscriber(payload: ISubscriber){
    return this._subscriberRepo.create(payload)

  }

  async updateSubscriber(id:string, payload:ISubscriber){
    return this._subscriberRepo.updateOne(id, payload)
  }

  async deleteSubscriber(id:string){
    return this._subscriberRepo.deleteOne(id)
  }
}