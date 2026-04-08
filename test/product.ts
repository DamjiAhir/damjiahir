// src/models/Product.ts
import mongoose, { Schema, model, models } from "mongoose";

// --- CHILD SCHEMA: The Variant ---
const VariantSchema = new Schema({
  name: { type: String, required: true }, // "3HP Model" or "Red Color"
  retailPrice: { type: Number, required: true },
  wholesalePrice: { type: Number, required: true },
  
  images: [{ type: String }], 
  specifications: [
    {
      key: { type: String, required: true }, 
      value: { type: String, required: true } 
    }
  ],

  warranty: { type: String, default: "" }, 
  inStock: { type: Boolean, default: true }
});

// --- PARENT SCHEMA ---
const ProductSchema = new Schema(
  {
    name: { type: String, required: true }, 
    category: { type: String, required: true }, 
    description: { type: String, required: true }, 
    videoUrl: { type: String, default: "" }, 
    image: { type: String, required: true },
    // The List of Variants
    variants: [VariantSchema], 
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", ProductSchema);
export default Product;