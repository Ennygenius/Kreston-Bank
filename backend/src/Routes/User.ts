import express, { Request, Response } from "express";
import {
  getAllUser,
  registerUser,
  login,
  getSingleUser,
  // getCurrentUser,
} from "../controllers/users";
import { Admin, VToken } from "../../Middleware/AuthVal";
import multer from "multer";
import storage from "../utils/cloudinary";

const router = express();
const upload = multer({ storage });

router
  .get("/", getAllUser)
  .get("/profile", VToken, getSingleUser)
  .post("/", upload.single("file"), registerUser)
  .post("/login", login);

// Add a new route for fetching the current user
// router.get("/current-user", VToken, getCurrentUser);
export default router;
