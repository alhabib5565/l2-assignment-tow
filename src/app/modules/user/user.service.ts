import { TUser } from "./user.interface";
import { User } from "./user.userSchema";



const createUser = async (userData: TUser) => {
    const result = await User.create(userData)
    return result
}

export const userService = {
    createUser
}