import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWRhOWMwZWRhNjU2NjQ1MDcwZGJjOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjk3Mzk5NSwiZXhwIjoxNjQzNTc4Nzk1fQ.60HDauT_elJwcofhoyZsTa46Q0PfmAJH5l6o09lv-hI` },
});
