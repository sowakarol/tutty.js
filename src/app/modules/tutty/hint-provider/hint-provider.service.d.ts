import { JsonParserService } from '../parser/json-parser.service';
import { CookiesHandlerService } from '../cookies-handler/cookies-handler.service';
import { HintCollection, Hint } from '../util/classes';
export declare class HintProviderService {
    private parser;
    private cookiesHandler;
    constructor(parser: JsonParserService, cookiesHandler: CookiesHandlerService);
    getHints(name: string): Hint[];
    getCollection(hintCol: HintCollection[], name: String): HintCollection;
    getUnshown(hints: Hint[]): Hint[];
}
