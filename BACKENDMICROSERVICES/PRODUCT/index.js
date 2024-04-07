import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Database from "./config/database.js";

// ROUTES

import { PRODUCT_CATEGORY_ROUTER } from "./routes/productCategoryRoutes.js";
import { PRODUCT_ROUTER } from "./routes/productRoutes.js";
import { PRODUCT_ITEM_ROUTER } from "./routes/productItemRoutes.js";
import { PRODUCT_ITEM_REVIEW_ROUTER } from "./routes/productItemReviewRoutes.js";

// DOTENV CONFIG

dotenv.config();

// CONSTANTS

const PORT = process.env.PORT;
const MONGODB_URI = process.env.DEV_MONGODB_URI;

// DATABASE

const db = new Database(MONGODB_URI);
db.connect();

// APP

const app = express();

// MIDDLEWARES

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TEST ROUTE

app.use("/api/test", (req, res) => {
  res.send("PRODUCT SERVICE WORKING ✅");
});

// ROUTES

app.use("/api/productCategory", PRODUCT_CATEGORY_ROUTER);
app.use("/api/product", PRODUCT_ROUTER);
app.use("/api/productItem", PRODUCT_ITEM_ROUTER);
app.use("/api/productItemReview", PRODUCT_ITEM_REVIEW_ROUTER);

// DATABASE DISCONNECT

process.on("SIGINT", async () => {
  try {
    await db.disconnect();
    console.log("Database Disconnected ✅");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

// SERVER LISTEN

app.listen(PORT, () => {
  console.log(`Server: ${PORT} ✅`);
});
