export interface HintCollectionInterface {
    name: String;
    hints: HintInterface[];
}
export interface HintInterface {
    id: String;
    message: String;
    direction: String;
}
export declare class HintCollection implements HintCollectionInterface {
    name: String;
    hints: Hint[];
    constructor(name: any, hints: any);
    getName(): String;
    getHints(): Hint[];
}
export declare class Hint implements HintInterface {
    id: String;
    message: String;
    direction: String;
    constructor(id: any, message: any, direction: any);
    getId(): String;
}
