import { CookieService } from 'ngx-cookie';
export declare class CookiesHandlerService {
    private _cookieService;
    COOKIE_KEY: string;
    SEPARATOR: string;
    constructor(_cookieService: CookieService);
    private getShown();
    wasShown(id: string): boolean;
    setShown(id: string): void;
    resetAll(): void;
}
