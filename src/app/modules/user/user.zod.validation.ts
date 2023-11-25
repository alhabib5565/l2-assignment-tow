
import { z } from 'zod'
const addressValidateSchema = z.object({
    street: z.string({
        required_error: 'street is required',
    }).nonempty({
        message: "street can't be empty"
    }).trim(),
    city: z.string({
        required_error: 'city is required',
    }).nonempty({
        message: "city can't be empty"
    }).trim(),
    country: z.string({
        required_error: 'country is required',
    }).nonempty({
        message: "country can't be empty"
    }).trim(),
});

const fullNameValidateSchema = z.object({
    firstName: z.string({
        required_error: 'firstName is required',
    }).nonempty({
        message: "firstName can't be empty"
    }).trim(),
    lastName: z.string({
        required_error: 'lastName is required',
    }).nonempty({
        message: "lastName can't be empty"
    }).trim(),
});

// const orderValidateSchema = z.object({
//     productName: z.string(),
//     price: z.number().positive(),
//     quantity: z.number().positive()
// })

const userValidateSchema = z.object({
    userId: z.number({
        required_error: 'userId is required',
        invalid_type_error: 'userId must be Number'
    }).positive(),
    username: z.string({
        required_error: 'username is required',
    }).nonempty({
        message: "Username can't be empty"
    }).trim(),
    password: z.string(),
    fullName: fullNameValidateSchema,
    age: z.number({
        required_error: 'Age is required',
        invalid_type_error: 'age must be Number'
    }).positive(),
    email: z.string().nonempty().email(),
    isActive: z.boolean(),
    hobbies: z.array(z.string({
        required_error: 'hobbies is required',
        invalid_type_error: 'hobbies must be text'
    }).nonempty().min(1)),
    address: addressValidateSchema,
    orders: z.array(z.object({
        productName: z.string(),
        price: z.number().positive(),
        quantity: z.number().positive()
    })).optional()
    // orders: z.array().isOptional()
});
export default userValidateSchema
