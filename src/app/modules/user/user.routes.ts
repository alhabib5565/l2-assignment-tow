
import express from "express";
import { userController } from "./user.controller";

const router = express.Router()

router.post('/', userController.createUser)
router.get('/', userController.getAllUser)
router.get('/:userId', userController.getSingleUser)
router.put('/:userId', userController.updateUser)
router.put('/:userId/orders', userController.addOrder)
router.get('/:userId/orders', userController.getSingleUserOrders)
router.get('/:userId/orders/total-price', userController.getTotalPrice)
router.delete('/:userId', userController.deleteUser)

export const userRoute = router