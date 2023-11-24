import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../AuthProvider/AuthProvider";

const instance = axios.create({
    baseURL: "http://localhost:5000/api"
})


const UseAxios = () => {
    const { logOut } = useContext(Authcontext)
    const navigate = useNavigate()

    instance.interceptors.response.use((res) => {
        return res
    },

        async (err) => {
            const status = err?.response?.status
            if (status === 401 || status === 403) {
                await logOut()
                // call the logout api to clear token
                navigate("/login")
            }
            return Promise.reject(err)
        }



    )
    return instance
};

export default UseAxios;