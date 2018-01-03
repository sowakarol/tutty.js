export interface HintCollectionInterface {
    name:String;
    hints: Hint[];
}

export interface HintInterace {
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
}

export class Hint implements HintInterace {
    id:String;
    message:String;
    direction:String;

    constructor(id, message, direction){
        this.direction = direction;
        this.id = id;
        this.message = message;
    }
}