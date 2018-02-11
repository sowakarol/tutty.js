export interface CookiesHandlerInterface {

    wasShown(id: string): boolean;
    setShown(id: string): void;
    resetAll(): void;

}