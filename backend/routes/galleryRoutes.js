import express from "express";
import upload from "../middleware/upload.js";
import {
  createGalleryItem,
  getGallery,
  deleteGalleryItem,
} from "../controllers/galleryController.js";

const router = express.Router();

router.post("/", upload.single("image"), createGalleryItem);
router.get("/", getGallery);
router.delete("/:id", deleteGalleryItem);

export default router;
