import axios, { AxiosInstance } from "axios"

export const api: AxiosInstance = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/"
})
