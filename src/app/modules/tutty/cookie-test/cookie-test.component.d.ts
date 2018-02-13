import { CookiesHandlerService } from '../cookies-handler/cookies-handler.service';
export declare class CookieTestComponent {
    private _cookiesHandler;
    id: string;
    wasShown: boolean;
    constructor(_cookiesHandler: CookiesHandlerService);
    show(): void;
    checkIfShown(): void;
    refresh(): void;
}
