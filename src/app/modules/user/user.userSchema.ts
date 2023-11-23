import { Schema, model } from "mongoose";
import { Address, User } from "./user.interface";

const addressSchema = new Schema<Address>({
    street: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
})

const userSchema = new Schema<User>({
    userId: {
        type: Number,
        unique: true,
        required: [true, 'userId is required']
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        }
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    hobbies: [String],
    address: addressSchema
})


export const user = model<User>('user', userSchema)