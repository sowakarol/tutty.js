import { Injectable } from '@angular/core';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { CookiesHandlerInterface } from './cookies-handler-interface';

@Injectable()
export class CookiesAdapter implements CookiesHandlerInterface {

    private COOKIE_KEY: string = 'shown';
    private SEPARATOR: string = ',';
    private OPTS: CookieOptions = {
      expires: new Date(2027, 12, 31),
      path: '/'
    };
  
    constructor(private _cookieService:CookieService) { }
  
    public wasShown(id: string): boolean {
      return this.getShown().includes(id);
    }
  
    public setShown(id: string): void {
      const updatedShown = this.addToShown(id),
            stringValue = updatedShown.join(this.SEPARATOR);
      this._cookieService.put(this.COOKIE_KEY, stringValue, this.OPTS);
    }

    public resetAll(): void {
      this._cookieService.removeAll();
    }

    private getShown(): string[] {
      const rawString = this._cookieService.get(this.COOKIE_KEY);
      return rawString ? rawString.split(this.SEPARATOR) : [];
    }

    private addToShown(id: string): string[] {
      const shown: string[] = this.getShown();
      shown.push(id);
      return shown;
    }

}
