"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsService = void 0;
const common_1 = require("@nestjs/common");
const person_model_1 = require("./person.model");
let PersonsService = class PersonsService {
    constructor() {
        this.persons = [];
    }
    insertPerson(name, email, age) {
        const perId = new Date().toString();
        const newPerson = new person_model_1.Person(perId, name, email, age);
        this.persons.push(newPerson);
        return perId;
    }
};
PersonsService = __decorate([
    (0, common_1.Injectable)()
], PersonsService);
exports.PersonsService = PersonsService;
//# sourceMappingURL=person.service.js.map