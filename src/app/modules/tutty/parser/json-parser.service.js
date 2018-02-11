"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const config_1 = require("../util/config");
const hint_factory_1 = require("../util/hint-factory/hint-factory");
const hint_collection_factory_1 = require("../util/hint-collection-factory/hint-collection-factory");
let JsonParserService = class JsonParserService {
    constructor(config) {
        this.config = config;
        this.hintFactory = new hint_factory_1.HintFactory();
        this.hintCollectionFactory = new hint_collection_factory_1.HintCollectionFactory();
    }
    parse() {
        let data = this.config.get("data");
        return this.parseObject(data);
    }
    parseObject(object) {
        let results = new Array();
        object.map(res => {
            let hints = new Array();
            res.hints.map(hint => {
                hints.push(this.hintFactory.createHint(hint.id, hint.message, hint.direction));
            });
            results.push(this.hintCollectionFactory.createHintCollection(res.name, hints));
        });
        return results;
    }
};
JsonParserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [config_1.Config])
], JsonParserService);
exports.JsonParserService = JsonParserService;
//# sourceMappingURL=json-parser.service.js.map