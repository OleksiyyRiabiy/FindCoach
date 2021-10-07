import axios from "axios";

export const requestsInstance = axios.create({
  baseURL:
    "https://main-project-c275e-default-rtdb.europe-west1.firebasedatabase.app/requests/",
  headers: {
    accept: "application/json",
  },
});
