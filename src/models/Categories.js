import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: String,
});

const Categories = mongoose.model("categories", categorySchema);

export default Categories;
