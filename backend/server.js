import express from "express";
const app = express();
import data from "./data.js";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
ConnectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sample product api
app.use("/api/seed", seedRouter);

//product routes
app.use("/api/products", productRouter);
//user Routes
app.use("/api/users", userRouter);

//error message
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
