import mongoose from 'mongoose';
import dotenv from 'dotenv'
import {injectable} from  'inversify'
import { SubscribersModel } from '@data/schemas/subscriber.schema';

dotenv.config()

const MONGODB_PASSWORD: string = process.env.MONGO_DB_PASSWORD || ""
const MONGODB_USERNAME: string = process.env.MONGO_DB_USERNAME || ""

const MONOGO_URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.ytncu2a.mongodb.net/?retryWrites=true&w=majority`

@injectable()
export class DBService{

  async connect(){
    mongoose.Promise = Promise;
    mongoose.connect(MONOGO_URL);
    //DB CONNECTION 
    mongoose.connection.on('connected', ()=>{
      console.log("DB CONNECTED");
    })
    // DB SUCCESS
    mongoose.connection.on('error', (error: Error) => console.log(error, 'DB CONNECTION ERROR'));
  
}

 get  subscribersModel(){
  return SubscribersModel
  
 }

}