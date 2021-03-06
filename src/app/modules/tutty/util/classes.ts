export interface HintCollectionInterface {
    name:String;
    hints: HintInterface[];
}

export interface HintInterface {
    id:String;
    message:String;
    direction:String;
}

export class HintCollection implements HintCollectionInterface{
    name: String;
    hints: Hint[];

    constructor(name, hints){
        this.name = name;
        this.hints = hints;
    }

    public getName(): String {
        return this.name;
    }

    public getHints(): Hint[] {
        return this.hints;
    }
}

export class Hint implements HintInterface {
    id:String;
    message:String;
    direction:String;

    constructor(id, message, direction){
        this.direction = direction;
        this.id = id;
        this.message = message;
    }

    public getId(): String {
        return this.id;
    }
}