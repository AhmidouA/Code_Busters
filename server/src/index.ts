import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: ".env" });
import { router } from "./routers/router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
    console.log(`server runnig on ${PORT}`);
});
