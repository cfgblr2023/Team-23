import express from "express";
import {
  loginController,
  registerController,
  getallVoln,
  dashboard,
  pendingApproval,
  setApproval,


} from "../controllers/adminController.js";
import { get } from "mongoose";

//router object
const router = express.Router();
// REGISTER || POPST
router.post("/register",registerController);

// LOGIN || POST
router.post("/login", loginController);

router.get("/getallvolunteers", getallVoln);
router.get("/dashboard", dashboard);
router.get("/pendingapproval", pendingApproval);
router.post("/setapproval", setApproval);


//export
export default router;