import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import userRouter from "./routers/userRouter.js";
import scanRouter from "./routers/scanRouter.js";
import vulnRouter from "./routers/vulnRouter.js";
import logRouter from "./routers/logRouter.js";
import targetRouter from "./routers/targetRouter.js";
import reportRouter from "./routers/reportRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", scanRouter);
app.use("/api", vulnRouter);
app.use("/api", targetRouter);
app.use("/api", logRouter);
app.use("/api", reportRouter);

app.listen(PORT, () =>
  console.log(`[LOG] APPLICATION STARTED ON PORT ${PORT}`)
);
