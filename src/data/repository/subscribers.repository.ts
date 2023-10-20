
import {injectable} from 'inversify'
import { ISubscriber } from '@data/interfaces';
import { DBService } from '@data/services/db.service';

@injectable()
export class SubscribersRepository{
  constructor (private readonly _DBService: DBService){

  }

  async all(){
   return await this._DBService.subscribersModel.find({})
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