import axios from "axios";

export const request = axios.create({
    baseURL: "http://16.16.110.106:8080/api/v1",
    headers: localStorage.getItem("TOKEN")?{'Authorization': "Bearer " + localStorage.getItem("TOKEN")}:undefined
})