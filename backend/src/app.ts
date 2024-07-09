import express from "express";
import cors from "cors";
import morgan from "morgan";
import allRouters from "./routers";
import { NotFoundErr } from "./lib/errors/notFoundErr";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

// MIDDLWARE
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors());
app.use(morgan("dev"));

// ROUTERS
app.use("/api/v1", allRouters);

// handling route not found errors
app.all("*", async () => {
  throw new NotFoundErr();
});

app.use(errorHandler);

export { app };
