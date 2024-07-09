import axios from "axios";

export const recommendedTokensService = async () => {
  const tokens = await axios.get(
    `https://aggregator-api.xy.finance/v1/recommendedTokens`
  );

  return tokens.data;
};
