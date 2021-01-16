import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserNominations,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin);
router.post("/login", authUser);
// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);
// // need a post nominations route
router.route("/nominations").get(protect, getUserNominations);

// router
//   .route("/:id")
//   .delete(protect, admin, deleteUser)
//   .get(protect, admin, getUserById)
//   .put(protect, admin, updateUser);

export default router;
