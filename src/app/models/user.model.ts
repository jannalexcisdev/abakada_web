import { USER_TYPE } from "../app.constants";

export interface UserModel {
    id?:number,
    firstName?:string,
    lastName?:string,
    username?:string,
    email?:string,
    password?:string,
    user_type?:USER_TYPE,
}