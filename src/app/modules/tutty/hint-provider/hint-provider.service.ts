import { Injectable } from '@angular/core';
import { JsonParserService } from '../parser/json-parser.service';
import { CookiesHandlerService } from '../cookies-handler/cookies-handler.service';
import { HintCollection, Hint } from '../util/classes';

@Injectable()
export class HintProviderService {

  constructor(private parser: JsonParserService,
              private cookiesHandler: CookiesHandlerService) { }

  public getHints(name: string) {
    let allHints: HintCollection[] = this.parser.parse(),
      currCollection: HintCollection =
        this.getCollection(allHints, name),
      hintsToDisplay: Hint[] =
        this.getUnshown(currCollection.getHints());

        return hintsToDisplay;
  }

  getCollection(hintCol: HintCollection[], name: String): HintCollection {
    return hintCol.find((collection) => {
      return collection.getName() == name;
    });
  }

  getUnshown(hints: Hint[]): Hint[] {
    return hints.filter((hint) => {
        return !this.cookiesHandler.wasShown(hint.getId() as string);
    });
  }

}
