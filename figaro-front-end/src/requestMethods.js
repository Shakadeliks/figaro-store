import axios from "axios";




const BASE_URL = "https://figarostore.herokuapp.com/api/"
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjhlMWJjN2U3ZjY5NGZiZjRhNGMzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTA4OTkxNiwiZXhwIjoxNjQ5MzQ5MTE2fQ.jN_WuNRrHf32QV0R_4s0jkf3ZZYm9Dr5hRn5KDGxsPw"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}` 

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({

    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}`},
})