import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("authToken");
    console.log("local storage",localStorage)


    return axios.create({
        baseURL: "https://cors-anywhere.herokuapp.com/https://watercan-io-bw.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    });
};

