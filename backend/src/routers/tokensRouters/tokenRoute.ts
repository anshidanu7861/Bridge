import express from "express";
import { TokenControllers } from "../../contorllers/tokensControllers";

const { getAllTokens } = TokenControllers();

const router = express.Router();

router.get("/all", getAllTokens);

export default router;
