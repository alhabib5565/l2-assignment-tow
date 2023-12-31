import { Order, TUser } from "./user.interface";
import { User } from "./user.userSchema";



const createUser = async (userData: TUser) => {
    const result = await User.create(userData)
    return result
}
// username, fullName, age, email, address
const getAllUser = async () => {
    const result = await User.aggregate([
        {
            $project: { username: 1, age: 1, _id: 0, fullName: 1, email: 1, address: 1 }
        }
    ])
    // const result = await User.find({})
    return result
}

const getSingleUser = async (id: number) => {
    const user = new User()
    if (await user.isUserExists(id)) {
        const result = await User.findOne({ userId: id }, { _id: 0, password: 0, orders: 0, __v: 0 })
        return result
    } else {
        throw Error('User not found')
    }
}


const updateUser = async (id: number, userData: TUser) => {
    const user = new User()
    if (await user.isUserExists(id)) {
        const result = await User.updateOne({ userId: id }, { $set: userData })
        return result
    } else {
        throw Error('User not found')
    }
}


const deleteUser = async (id: number) => {
    const user = new User()
    if (await user.isUserExists(id)) {
        const result = await User.deleteOne({ userId: id })
        return result
    } else {
        throw Error('User not found')
    }
}

const addOrder = async (id: number, orderData: Order) => {
    const user = new User()
    if (await user.isUserExists(id)) {
        const result = await User.findOneAndUpdate(
            { userId: id },
            { $push: { orders: orderData } },
            // { runValidators : true}
            { runValidators: true }
        )
        return result
    } else {
        throw Error('User not found')
    }
}


const getSingleUserOrders = async (id: number) => {
    const user = new User()
    if (await user.isUserExists(id)) {
        const result = await User.aggregate([
            { $match: { userId: id } },
            { $project: { orders: 1, _id: 0 } }
        ])
        return result
    } else {
        throw Error('User not found')
    }
}

const getTotalPrice = async (id: number) => {
    const result = await User.aggregate([
        { $unwind: '$orders' },
        { $group: { _id: id, totalPrice: { $sum: "$orders.price" } } },
        { $project: { _id: 0 } }
    ])

    return result[0]

}

export const userService = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addOrder,
    getSingleUserOrders,
    getTotalPrice
}