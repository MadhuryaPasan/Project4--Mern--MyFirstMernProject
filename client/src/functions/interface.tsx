export interface iData {
    _id?: string;
    name?: string;
    age?: number;
}

export interface iUser {
    _id?: string;
    name?: string;
    email?: string;
    password?: string;
    joinDate?: Date;
    post?: string[];
}