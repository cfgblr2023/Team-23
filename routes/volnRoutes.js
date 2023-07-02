import express from "express";
import {
    applyforevent,
    getallevents,
  loginController,
  registerController,
} from "../controllers/volnController.js";

//router object
const router = express.Router();
// REGISTER || POPST
router.post("/register",registerController);

// LOGIN || POST
router.post("/login", loginController);
router.get("/getallevents", getallevents);
router.post("/applyforevent", applyforevent);



//export
export default router;