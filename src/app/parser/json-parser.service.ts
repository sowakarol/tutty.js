import { Injectable } from '@angular/core';
import {ParserService} from './parser-interface'
import {HintCollection, Hint} from '../util/classes'
import {Config} from '../util/config'
import {HintFactory} from '../util/hint-factory/hint-factory'
import {HintCollectionFactory} from '../util/hint-collection-factory/hint-collection-factory'


@Injectable()
export class JsonParserService implements ParserService{
  constructor(private config:Config){}

  hintFactory:HintFactory = new HintFactory(); 
  hintCollectionFactory:HintCollectionFactory = new HintCollectionFactory();

  parse(): HintCollection[]{
    let data = this.config.get("data");
    return this.parseObject(data);
  }

  private parseObject(object: any): HintCollection[] {
    let results:HintCollection[] = new Array<HintCollection>();
    
    object.map(
      res => {
        let hints: Hint[] = new Array<Hint>();
        res.hints.map(hint => {
          hints.push(this.hintFactory.createHint(hint.id, hint.message, hint.direction))
        });
      results.push(this.hintCollectionFactory.createHintCollection(res.name, hints));

    })
    return results;    
  }
  
}
