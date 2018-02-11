import { HintCollectionInterface, HintInterface } from '../classes';
export interface HintCollectionFactoryInterface {
    createHintCollection(name: String, hints: HintInterface[]): HintCollectionInterface;
}
