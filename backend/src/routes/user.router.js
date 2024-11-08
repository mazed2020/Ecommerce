import express from "express";
import { userRegistrations } from "../controllers/user.controller.js";
const router=express.Router();
 
  // Endpoint to get all users
  router.route('/').get(userRegistrations);
  export default router;