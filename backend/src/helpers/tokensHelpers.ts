import { recommendedTokensService } from "../services/tokenServices";

export const TokensHelpers = () => {
  const getTokensHelper = async () => {
    const tokens = await recommendedTokensService();

    return tokens;
  };

  return {
    getTokensHelper,
  };
};
