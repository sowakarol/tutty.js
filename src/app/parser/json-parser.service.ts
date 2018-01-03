import { Injectable } from '@angular/core';
import {ParserService} from './parser-interface'
import {HintCollection, Hint} from '../util/classes'
import {Config} from '../util/config'


@Injectable()
export class JsonParserService implements ParserService{
  constructor(private config:Config){}
  
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
            hints.push(new Hint(hint.id, hint.message, hint.direction))
          });
        results.push(new HintCollection(res.name, hints) );
  
      })
      return results;    
    }
  
}
