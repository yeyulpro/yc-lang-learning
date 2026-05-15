import axiosInstance from "./axios";


export const signupUser = async (payload) => {
    const res = await axiosInstance.post("/auth/signup", payload);
    console.log(res.data);
    return res.data;
}

