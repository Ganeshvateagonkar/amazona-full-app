import express from "express";
const app = express();
import data from "./data.js";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
dotenv.config();
ConnectDB();

//sample product api
app.use("/api/seed", seedRouter);

//product routes
app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
