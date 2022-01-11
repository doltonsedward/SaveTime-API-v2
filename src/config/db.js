import mongoose from "mongoose";
import { MONGOOSE_CONNECTION } from "./common";

mongoose.connect(MONGOOSE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
