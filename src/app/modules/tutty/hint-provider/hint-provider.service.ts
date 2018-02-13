import { Injectable } from '@angular/core';
import { JsonParserService } from '../parser/json-parser.service';
import { CookiesAdapter } from '../cookies-handler/cookies-adapter.service';
import { HintCollection, Hint } from '../util/classes';

@Injectable()
export class HintProviderService {

  constructor(private parser: JsonParserService,
              private cookiesHandler: CookiesAdapter) { }

  public getHints(name: string) {
    let allHints: HintCollection[] = this.parser.parse(),
      currCollection: HintCollection =
        this.getCollection(allHints, name);

    if(!currCollection) {
      console.warn('tutty: ' + name + ' not found!');
      return [];
    }

    // COOKIES RESET FOR TESTS:
    this.cookiesHandler.resetAll();
    return !this.wasShown(name) ? currCollection.getHints() : [];
  }

  public setShown(name: string): void {
    this.cookiesHandler.setShown(name);
  }

  getCollection(hintCol: HintCollection[], name: String): HintCollection {
    return hintCol.find((collection) => {
      return collection.getName() == name;
    });
  }

  private wasShown(collectionName: string): boolean {
    return this.cookiesHandler.wasShown(collectionName);
  }

}
