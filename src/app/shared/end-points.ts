import { environment } from "@env";

export class EndPoints {
    static USERS = environment.REST_USER + '/users';
}