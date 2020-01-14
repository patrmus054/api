// import { merge } from "lodash";
const merge = require("lodash");
const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  port: 3000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: "100d"
  }
};

let envConfig = {
  secrets: {
    jwt: "learneverything"
  },
  dbUrl: "mongodb://localhost:27017/api-design"
};

module.exports = merge(baseConfig, envConfig);
