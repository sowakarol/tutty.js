"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HintCollection {
    constructor(name, hints) {
        this.name = name;
        this.hints = hints;
    }
    getName() {
        return this.name;
    }
    getHints() {
        return this.hints;
    }
}
exports.HintCollection = HintCollection;
class Hint {
    constructor(id, message, direction) {
        this.direction = direction;
        this.id = id;
        this.message = message;
    }
    getId() {
        return this.id;
    }
}
exports.Hint = Hint;
//# sourceMappingURL=classes.js.map