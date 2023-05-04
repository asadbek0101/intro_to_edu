import axios from "axios";

export const request = axios.create({
    baseURL: "https://jarvis-jon.uz:8443/api/v1",
    headers: localStorage.getItem("TOKEN")?{'Authorization': "Bearer " + localStorage.getItem("TOKEN")}:undefined
})
