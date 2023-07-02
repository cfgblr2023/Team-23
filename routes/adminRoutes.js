import express from "express";
import {
  loginController,
  registerController,
  getapprovedVoln,
  dashboard,
  pendingApproval,
  setApproval,
  createEventController,
  approvedvol,


} from "../controllers/adminController.js";
import { get } from "mongoose";

//router object
const router = express.Router();
// REGISTER || POPST
router.post("/register",registerController);

// LOGIN || POST
router.post("/login", loginController);

router.get("/getapprovedvolunteers", getapprovedVoln);
router.get("/dashboard", dashboard);
router.get("/pendingapproval", pendingApproval);
router.get("/approvedvolunteers",approvedvol);  
router.post("/setapproval", setApproval);
router.post("/eventadd", createEventController);


//export
export default router;