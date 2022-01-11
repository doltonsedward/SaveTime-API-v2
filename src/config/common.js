import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGOOSE_CONNECTION = process.env.MONGOOSE_CONNECTION;

export { PORT, MONGOOSE_CONNECTION };
