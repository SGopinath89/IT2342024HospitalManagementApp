import express from "express";
import {sendMessage} from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);

export default router;


//router.get("/getall", isAdminAuthenticated, getAllMessages);

/*
import {getAllMessages,sendMessage,} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
*/