import axios from "axios";

export const uploadImage = async (image) => {
    const newForm = new FormData()
    newForm.append("image", image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}
    `, newForm)

    return data
}