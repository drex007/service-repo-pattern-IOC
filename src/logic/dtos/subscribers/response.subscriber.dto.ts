import { IResponseSubscriber } from "@data/interfaces";
import { ObjectId } from 'mongodb';

export class ResponseSubscriberDto{
  constructor(
    public readonly id: ObjectId,
    public readonly name: string,
    public readonly subscribedToChannel: string,
    public readonly subscribeDate: Date){

  }

  static from (entity:IResponseSubscriber){

    
    return new ResponseSubscriberDto(
      entity._id,
      entity.name,
      entity.subscribedToChannel,
      entity.subscribeDate
    )
  }
}


  