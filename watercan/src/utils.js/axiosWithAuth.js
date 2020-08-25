import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("authToken");
    console.log("local storage",localStorage)


    return axios.create({
        baseURL: "https://watercan-io-bw.herokuapp.com/api",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

// Authorization: `Bearer ${token}`
