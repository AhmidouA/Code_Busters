import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
import { router } from "./routers/router";

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use(router);

app.listen(PORT, () => {
    console.log(`server runnig on ${PORT}`);
});
