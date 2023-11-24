import { Schema, model } from "mongoose";
import { Address, FullName, TUser } from "./user.interface";

const addressSchema = new Schema<Address>({
    street: {
        type: String,
        required: [true, 'Street is required']

    },
    city: {
        type: String,
        required: [true, 'City is required']
    },
    country: {
        type: String,
        required: [true, 'Country is required']
    },
})

const fullNameSchema = new Schema<FullName>({
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    }
})

const userSchema = new Schema<TUser>({
    userId: {
        type: Number,
        unique: true,
        required: [true, 'userId is required']
    },
    username: {
        type: String,
        required: [true, 'user name is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    fullName: {
        type: fullNameSchema,
        required: [true, 'full name is required']
    },
    age: {
        type: Number,
        required: [true, 'age is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    isActive: {
        type: Boolean,
        required: [true, 'isActive is required']
    },
    hobbies: {
        type: [String],
        required: [true, 'hobbies is required']
    },
    address: {
        type: addressSchema,
        required: [true, 'address is required']
    }
})


export const User = model<TUser>('user', userSchema)