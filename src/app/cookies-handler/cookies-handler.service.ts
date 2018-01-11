import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class CookiesHandlerService {

  COOKIE_KEY: string = 'shown';
  SEPARATOR: string = ',';
  
    constructor(private _cookieService:CookieService) { 
      console.log("konstruktor cookies handlera");
    }
  
    private getShown(): string[] {
      var rawString = this._cookieService.get(this.COOKIE_KEY);
      console.log(rawString);
      return rawString ? rawString.split(this.SEPARATOR) : [];
    }
  
    public wasShown(id: string): boolean {
      return this.getShown().includes(id);
    }
  
    public setShown(id: string): void {
      var shownElements = this.getShown(),
        newVal: string;
      id && shownElements.push(id);
      newVal = shownElements.join(this.SEPARATOR);
      console.log(newVal);      
      this._cookieService.put(this.COOKIE_KEY, newVal, { 
        expires: new Date(2027, 12, 31),
        path: '/' });
    }

    public resetAll(): void {
      this._cookieService.removeAll();
    }

}
