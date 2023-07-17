import { useMutation } from "react-query";
import { adminLogin } from "./base.auth";

const useLoginQuery = () => {
    return useMutation(adminLogin)
}

export { useLoginQuery }