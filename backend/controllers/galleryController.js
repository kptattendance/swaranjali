import Gallery from "../models/Gallery.js";
import cloudinary from "../config/cloudinary.js";

// Upload Image + Save to DB
export const createGalleryItem = async (req, res) => {
  try {
    const { title } = req.body;

    const newImage = new Gallery({
      title,
      imageUrl: req.file.path,
      publicId: req.file.filename,
    });

    await newImage.save();

    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Gallery Images
export const getGallery = async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Image
export const deleteGalleryItem = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);

    if (!image) return res.status(404).json({ message: "Not found" });

    await cloudinary.uploader.destroy(image.publicId);
    await image.deleteOne();

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
