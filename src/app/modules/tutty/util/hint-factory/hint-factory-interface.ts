import { HintInterface } from '../classes';


export interface HintFactoryInterface {
    createHint(id: String,message:String,direction:String): HintInterface;
}