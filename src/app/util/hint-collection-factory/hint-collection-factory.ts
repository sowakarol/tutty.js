import { HintInterface, Hint, HintCollection } from '../classes';
import {HintCollectionFactoryInterface} from './hint-collection-factory-interface';

export class HintCollectionFactory implements HintCollectionFactoryInterface {
    createHintCollection(name:String,hints: HintInterface[]){
        return new HintCollection(name,hints);
    }
}