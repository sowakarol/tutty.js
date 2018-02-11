"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../classes");
class HintCollectionFactory {
    createHintCollection(name, hints) {
        return new classes_1.HintCollection(name, hints);
    }
}
exports.HintCollectionFactory = HintCollectionFactory;
//# sourceMappingURL=hint-collection-factory.js.map