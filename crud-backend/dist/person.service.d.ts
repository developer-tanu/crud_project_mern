import { Person } from "./person.model";
export declare class PersonsService {
    persons: Person[];
    insertPerson(name: string, email: string, age: number): string;
}
