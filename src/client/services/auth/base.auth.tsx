import axios from "axios";
import { Admin } from "../types";
import { setStorage } from "../storage";



const adminLogin = async (admin: Admin) => {
    try {
        const response = await axios.post<Admin>("/auth/login", admin)
        console.log(response.data)
        setStorage("token", response.data.token)
        return response.data
    } catch (error) {
        throw error
    }
}


export { adminLogin }