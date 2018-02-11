import { ParserService } from './parser-interface';
import { HintCollection } from '../util/classes';
import { Config } from '../util/config';
import { HintFactory } from '../util/hint-factory/hint-factory';
import { HintCollectionFactory } from '../util/hint-collection-factory/hint-collection-factory';
export declare class JsonParserService implements ParserService {
    private config;
    constructor(config: Config);
    hintFactory: HintFactory;
    hintCollectionFactory: HintCollectionFactory;
    parse(): HintCollection[];
    private parseObject(object);
}
