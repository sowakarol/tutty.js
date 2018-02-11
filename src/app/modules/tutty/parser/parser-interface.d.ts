import { HintCollection } from '../util/classes';
export interface ParserService {
    parse(): HintCollection[];
}
