export class HttpExceptions extends Error {
  constructor (public readonly msg:string, public statusCode:number){
    super(msg)
  }
} 