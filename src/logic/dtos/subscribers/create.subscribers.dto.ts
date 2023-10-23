import { HttpExceptions } from "src/web/exceptions/http.exceptions"

export class CreateSubscriberDto{
  constructor(public readonly name: string, public readonly subscribedToChannel: string ){

  }

  static from (body:Partial<CreateSubscriberDto>){
    if(!body.name || !body.subscribedToChannel){
      throw new HttpExceptions("name and channel is required", 419)
    }
    
    return new CreateSubscriberDto(body.name, body.subscribedToChannel)
  }
}


  