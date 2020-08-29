// a library to wrap and simplify api calls
const apisauce = require("apisauce");
const axios = require("axios");
// our "constructor"
// const create = (baseURL = 'http://10.1.20.83:8096') => {
const create = (baseURL = "https://api.itedu.me") => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {},
    // 10 second timeout...
    timeout: 10000,
  });
  // auth
  const userLogin = ({ email, password }) => {
    console.log("userLogin -> password", password);
    console.log("userLogin -> email", email);
    return api.post("/user/login", { email: email, password: password });
  };
  return {
    userLogin,
  };
};

const doing = async () => {
  create()
    .userLogin()
    .then((res) => {
      console.log("doing -> res", res);
    });
};

doing();
