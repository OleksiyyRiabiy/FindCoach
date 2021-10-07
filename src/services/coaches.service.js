import axios from "axios";

export const coachesInstance = axios.create({
  baseURL:
    "https://main-project-c275e-default-rtdb.europe-west1.firebasedatabase.app/coaches",
  headers: {
    accept: "application/json",
  },
});
