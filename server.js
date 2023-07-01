// packages imports
import express from "express";
// import "express-async-errors"; //try catch not required
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

// files imports
import connectDB from "./config/db.js";

// routes import

import adminRoutes from "./routes/adminRoutes.js";

//Dot ENV config
dotenv.config();

// mongodb connection
connectDB();



//rest object
const app = express();

//middelwares


app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", adminRoutes);




//port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
      .bgCyan.white
  );
});