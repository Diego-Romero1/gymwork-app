import axios from "axios";

export const Api = axios.create({
    baseURL:  "http://localhost:5000"
})

export const search = async(url, setData) => {
    const response = await Api.get(url);
    setData(response.data)
}