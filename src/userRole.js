import UseAxios from "./Axios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getItemFromLS } from "./LocalStorage/localStorage";

export const userRole = async (email) => {

    const token = getItemFromLS()
    const axios = UseAxios()
    const [isLoading, setLoding] = useState(true)

    const { data } = await axios.get(`/user/role?token=${token}&&email=${email}`)
    setLoding(false)

    return { data, isLoading }

}