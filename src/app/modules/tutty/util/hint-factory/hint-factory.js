"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../classes");
class HintFactory {
    createHint(id, message, direction) {
        return new classes_1.Hint(id, message, direction);
    }
}
exports.HintFactory = HintFactory;
//# sourceMappingURL=hint-factory.js.map