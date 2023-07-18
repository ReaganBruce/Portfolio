import axios from "axios";
import { Admin } from "../types";
import { setStorage } from "../storage";



const adminLogin = async (admin: Admin) => {
    try {
        const response = await axios.post<Admin>("/auth/login", admin)
        setStorage("token", response.data.token)
        return response.data.token
    } catch (error) {
        throw error
    }
}


export { adminLogin }