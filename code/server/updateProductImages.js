import mongoose from "mongoose";
import { Product } from "./Schema.js";

// Map product keywords to image URLs
const imageMap = [
  { keyword: "samsung", url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" },
  { keyword: "nike", url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=400&q=80" },
  { keyword: "boat", url: "https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&w=400&q=80" },
  { keyword: "puma", url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
  { keyword: "mi", url: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80" },
  { keyword: "backpack", url: "https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&w=400&q=80" },
  { keyword: "t-shirt", url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
  { keyword: "shoes", url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=400&q=80" },
  { keyword: "headphone", url: "https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&w=400&q=80" },
  // Add more mappings as needed
];

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/shopEZ", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function updateImages() {
  const products = await Product.find();
  for (const product of products) {
    let found = false;
    for (const { keyword, url } of imageMap) {
      if (
        product.title.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword)
      ) {
        product.mainImg = url;
        found = true;
        break;
      }
    }
    // Default image if no keyword matches
    if (!found) {
      product.mainImg =
        "https://images.pexels.com/photos/715688/pexels-photo-715688.jpeg?auto=compress&w=400&q=80";
    }
    await product.save();
    console.log(`Updated: ${product.title}`);
  }
  console.log("All product images updated!");
  mongoose.disconnect();
}

updateImages().catch((err) => {
  console.error(err);
  mongoose.disconnect();
}); 