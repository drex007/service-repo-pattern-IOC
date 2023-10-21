
import {injectable} from 'inversify'
import { ISubscriber } from '@data/interfaces';
import { DBService } from '@data/services/db.service';
import { ResponseSubscriberDto } from '@logic/dtos/subscribers/response.subscriber.dto';

@injectable()
export class SubscribersRepository{
  constructor (private readonly _DBService: DBService){

  }

  async all(){
   const subscribers =  await this._DBService.subscribersModel.find({})
   return subscribers.map((subscriber)=> ResponseSubscriberDto.from(subscriber))
  }

  async findOne(id:string){
    return await this._DBService.subscribersModel.findById(id)
  }

  async create(entity: ISubscriber){
    return await this._DBService.subscribersModel.create(entity)
  }
  async updateOne(id:string, entity:ISubscriber){
    await this._DBService.subscribersModel.findOneAndUpdate({_id:id}, entity)
    return await this.findOne(id)
  }
  async deleteOne(id:string){
    return await this._DBService.subscribersModel.findByIdAndDelete(id)
  }
} 