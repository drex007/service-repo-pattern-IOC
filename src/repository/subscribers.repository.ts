
import {injectable} from 'inversify'
import { ISubscriber } from 'src/interfaces';
import { DBService } from 'src/services/db.service';

@injectable()
export class SubscribersRepository{
  constructor (private readonly _dbContext: DBService){

  }

  async all(){
   return await this._dbContext.subscribersModel.find({})
  }

  async findOne(id:string){
    return await this._dbContext.subscribersModel.findById(id)
  }

  async create(payload: ISubscriber){
    return await this._dbContext.subscribersModel.create(payload)
  }
  async updateOne(id:string, payload:ISubscriber){
    await this._dbContext.subscribersModel.findOneAndUpdate({_id:id}, payload)
    return await this.findOne(id)
  }
  async deleteOne(id:string){
    return await this._dbContext.subscribersModel.findByIdAndDelete(id)
  }
} 