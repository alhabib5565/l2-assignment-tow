
export type Address = {
    street: string;
    city: string;
    country: string;
}

export type User = {
    userId: number;
    username: string;
    password: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address: Address
}

