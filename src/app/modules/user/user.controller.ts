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
const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllUser()
        res.status(200).json({
            success: true,
            message: "Users fetched successfully!",
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
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId
        const result = await userService.getSingleUser(Number(id))
        res.status(200).json({
            success: true,
            message: "User fetched successfully!",
            data: result
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong!",
            error: {
                code: 404,
                description: error.message || "something went wrong!"
            }
        })
    }
}
const updateUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId
        const userData = req.body
        const result = await userService.updateUser(Number(id), userData)
        res.status(200).json({
            success: true,
            message: "User updated successfully!",
            data: result
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong!",
            error: {
                code: 404,
                description: error.message || "something went wrong!"
            }
        })
    }
}
const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId
        await userService.deleteUser(Number(id))
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: null
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong!",
            error: {
                code: 404,
                description: error.message || "something went wrong!"
            }
        })
    }
}

const addOrder = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId
        const userData = req.body
        await userService.addOrder(Number(id), userData)
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: null
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong!",
            error: {
                code: 404,
                description: error.message || "something went wrong!"
            }
        })
    }
}
const getSingleUserOrders = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId
        const result = await userService.getSingleUserOrders(Number(id))
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: result
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong!",
            error: {
                code: 404,
                description: error.message || "something went wrong!"
            }
        })
    }
}

const getTotalPrice = async (req: Request, res: Response) => {
    try {
        const id = req.params.userId
        const result = await userService.getTotalPrice(Number(id))
        res.status(200).json({
            success: true,
            message: 'Total price calculated successfully!',
            data: result
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong!",
            error: {
                code: 404,
                description: error.message || "something went wrong!"
            }
        })
    }
}
export const userController = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addOrder,
    getSingleUserOrders,
    getTotalPrice
}