// a library to wrap and simplify api calls
import apisauce from "apisauce";
import _ from "lodash";
// our "constructor"
// const create = (baseURL = 'http://10.1.20.83:8096') => {
const create = (baseURL = "https://api.itedu.me") => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      "Cache-Control": "no-cache",
    },
    // 10 second timeout...
    timeout: 10000,
  });
  // auth
  const userLogin = ({ email, password }) =>
    api.post("/user/login", { email: email, password: password });
  return {
    userLogin,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
