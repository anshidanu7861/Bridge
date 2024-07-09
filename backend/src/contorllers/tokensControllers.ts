import { Request, Response } from "express";
import { BadRequestErr } from "../lib/errors/badRequestErr";
import { TokensHelpers } from "../helpers/tokensHelpers";

const { getTokensHelper } = TokensHelpers();

export const TokenControllers = () => {
  const getAllTokens = async (req: Request, res: Response) => {
    const tokens = await getTokensHelper();

    if (!tokens) throw new BadRequestErr("tokens not found");

    res.status(200).json(tokens);
  };

  return {
    getAllTokens,
  };
};
