import { Role } from "src/app/core/role.model";

export interface User {
    name : string;
    familyName : string;
    address : string;
    city : string;
    province : string;
    postalCode : string;
    bankAccount : string;
    passwd : string;
    role? : Role;
    active? : boolean;
    registrationDate? : Date;
}