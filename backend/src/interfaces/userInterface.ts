import { Document } from "mongoose";

export interface UserDocument extends Document{
    username: string;
    email: string;
    password: string;
    profilePic?: string;
    phoneNumber : number;
    blocked?: boolean;
    verified?:boolean;
    online?:boolean
}