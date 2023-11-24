export const addtoLS = (item) => {

    return localStorage.setItem("token", JSON.stringify(item))

}

export const getItemFromLS = () => {
    return JSON.parse(localStorage.getItem("token"))
}

export const removeItemFromLS = () => {
    return localStorage.removeItem("token")
}