import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    process.env.MONGODB_URL || "mongodb://localhost/e-commerce_react_redux",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || "sb",
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
  AWS_ACCESS_KEY_ID: process.env.accessKeyId || "accessKeyId",
  AWS_SECRET_ACCESS_KEY: process.env.secretAccessKey || "secretAccessKey",
};
