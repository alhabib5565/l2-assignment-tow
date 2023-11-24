import { Request, Response } from "express";
import { userService } from "./user.service";
import userValidateSchema from "./user.zod.validation";



const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body
        const zodValidateData = userValidateSchema.parse(userData)
        const result = await userService.createUser(zodValidateData)
        res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: result
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong!",
        })
    }
}

export const userController = {
    createUser
}