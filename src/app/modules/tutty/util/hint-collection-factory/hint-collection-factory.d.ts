import { HintInterface, HintCollection } from '../classes';
import { HintCollectionFactoryInterface } from './hint-collection-factory-interface';
export declare class HintCollectionFactory implements HintCollectionFactoryInterface {
    createHintCollection(name: String, hints: HintInterface[]): HintCollection;
}
