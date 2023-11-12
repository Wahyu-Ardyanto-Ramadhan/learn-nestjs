"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestjsService = void 0;
const common_1 = require("@nestjs/common");
let NestjsService = class NestjsService {
    constructor() {
        this.nestjs = [
            { id: 0, name: 'nestjsA', weapon: 'stars' },
            { id: 1, name: 'nestjsB', weapon: 'nunchucks' },
        ];
    }
    getNestjs(weapon) {
        if (weapon) {
            return this.nestjs.filter((nest) => nest.weapon === weapon);
        }
        return this.nestjs;
    }
    getNest(id) {
        const nest = this.nestjs.find((nest) => nest.id === id);
        if (!nest) {
            throw new Error('nest not found');
        }
        return nest;
    }
    createNest(createNestjsDto) {
        const newnestjs = {
            ...createNestjsDto,
            id: Date.now(),
        };
        this.nestjs.push(newnestjs);
        return newnestjs;
    }
};
exports.NestjsService = NestjsService;
exports.NestjsService = NestjsService = __decorate([
    (0, common_1.Injectable)()
], NestjsService);
//# sourceMappingURL=nestjs.service.js.map