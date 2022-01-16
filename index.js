import app from "./app";
import { PORT } from "./src/config/common";

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
