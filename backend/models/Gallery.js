import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    publicId: {
      type: String, // for deleting from cloudinary later
      required: true,
    },
  },
  { timestamps: true },
);

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;
