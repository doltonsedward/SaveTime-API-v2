import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const MONGOOSE_CONNECTION = process.env.MONGOOSE_CONNECTION;
