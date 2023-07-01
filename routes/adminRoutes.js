import express from "express";
import {
  loginController,
  registerController,
  getallVoln,
} from "../controllers/adminController.js";
import { get } from "mongoose";

//router object
const router = express.Router();
// REGISTER || POPST
router.post("/register",registerController);

// LOGIN || POST
router.post("/login", loginController);

router.get("/getallvolunteers", getallVoln);
//export
export default router;