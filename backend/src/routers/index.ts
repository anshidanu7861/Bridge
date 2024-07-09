import express from "express";
import { tokenRouters } from "./tokensRouters";

const router = express.Router();

router.use("/tokens", tokenRouters);

export default router;
