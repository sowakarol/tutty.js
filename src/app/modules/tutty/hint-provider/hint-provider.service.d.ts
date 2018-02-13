import { JsonParserService } from '../parser/json-parser.service';
import { CookiesAdapter } from '../cookies-handler/cookies-adapter.service';
import { HintCollection, Hint } from '../util/classes';
export declare class HintProviderService {
    private parser;
    private cookiesHandler;
    constructor(parser: JsonParserService, cookiesAdapter: CookiesAdapter);
    getHints(name: string): Hint[];
    getCollection(hintCol: HintCollection[], name: String): HintCollection;
    getUnshown(hints: Hint[]): Hint[];
}
