import { Model } from "mongoose";

export type Address = {
    street: string;
    city: string;
    country: string;
}

export type FullName = {
    firstName: string;
    lastName: string;
}

export type Order = {
    productName: string,
    price: number,
    quantity: number
}

export type TUser = {
    userId: number;
    username: string;
    password: string;
    fullName: FullName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address: Address;
    orders?: Order[]
}

export type UserMethods = {
    isUserExists(id: number): Promise<TUser | null>
}

export type UserModel = Model<TUser, Record<string, never>, UserMethods>;
