import { Schema, model } from "mongoose";
import { Address, FullName, Order, TUser, UserMethods, UserModel } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";
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
}, { _id: false })

const fullNameSchema = new Schema<FullName>({
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    }
}, { _id: false })

const orderSchema = new Schema<Order>({
    productName: {
        type: String,
        required: [true, 'productName is required']
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    quantity: {
        type: Number,
        required: [true, 'quantity is required']
    }
}, { _id: false })

const userSchema = new Schema<TUser, UserModel, UserMethods>({
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
    },
    orders: {
        type: [orderSchema],
        default: []
    }
}, { id: false })

userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_round))
    next()
})

userSchema.post('save', async function (doc, next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    doc.password = ''
    next()
})


userSchema.method('isUserExists', async function isUserExists(id: number) {
    const existing = await User.findOne({ userId: id })
    return existing
})

export const User = model<TUser, UserModel>('user', userSchema)