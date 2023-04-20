import axios from "axios";

export const request = axios.create({
    baseURL: "http://176.96.241.109:9000/api/v1",
    headers: localStorage.getItem("TOKEN")?{'Authorization': "Bearer " + localStorage.getItem("TOKEN")}:undefined
})