import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  headers: {
    accept: "application/json",
  },
});
