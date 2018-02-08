import { HintInterface, Hint } from '../classes';
import {HintFactoryInterface} from './hint-factory-interface';

export class HintFactory implements HintFactoryInterface {
    createHint(id: String,message:String,direction:String){
        return new Hint(id, message, direction);
    }
}

