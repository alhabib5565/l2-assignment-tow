
export type Address = {
    street: string;
    city: string;
    country: string;
}

export type FullName = {
    firstName: string;
    lastName: string;
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
    address: Address
}

