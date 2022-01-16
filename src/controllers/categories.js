import Categories from "../models/Categories";

export const getCategories = async (req, res) => {
  try {
    const data = await Categories.find({}, "-__v");

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Internal Server Error",
    });
  }
};
