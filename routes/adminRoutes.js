import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/adminController.js";

//router object
const router = express.Router();
// REGISTER || POPST
router.post("/register",registerController);

// LOGIN || POST
router.post("/login", loginController);

//export
export default router;