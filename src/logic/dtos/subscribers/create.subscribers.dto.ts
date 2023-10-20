export class CreateSubscriberDto{
  constructor(public readonly name: string, public readonly subscribedToChannel: string ){

  }

  static from (body:Partial<CreateSubscriberDto>){
    if(!body.name || !body.subscribedToChannel){
      throw new Error('name and subscribedToChannel are required')
    }
    
    return new CreateSubscriberDto(body.name, body.subscribedToChannel)
  }
}


  