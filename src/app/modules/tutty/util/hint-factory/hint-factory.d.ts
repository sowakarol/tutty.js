import { Hint } from '../classes';
import { HintFactoryInterface } from './hint-factory-interface';
export declare class HintFactory implements HintFactoryInterface {
    createHint(id: String, message: String, direction: String): Hint;
}
