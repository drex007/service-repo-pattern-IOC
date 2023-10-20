import { ObjectId } from 'mongodb';


export interface ISubscriber{
  name?: string;
  subscribedToChannel?: string;
  

}

export interface IResponseSubscriber{
  _id: ObjectId;
  name: string;
  subscribedToChannel: string;
  subscribeDate: Date;

}