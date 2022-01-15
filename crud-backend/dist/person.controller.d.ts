import { PersonsService } from "./person.service";
export declare class PersonsController {
    private readonly personsService;
    constructor(personsService: PersonsService);
    addPerson(persName: string, persEmail: string, perAge: number): {
        id: string;
    };
}
