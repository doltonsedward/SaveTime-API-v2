import mongoose from "mongoose";
import { MONGOOSE_CONNECTION } from "./common";

mongoose.connect(MONGOOSE_CONNECTION);

const db = mongoose;

export default db;
