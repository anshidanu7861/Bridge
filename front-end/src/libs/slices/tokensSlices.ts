import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Token {
  address: string;
  symbol: string;
  name: string;
  chainId: number;
  decimals: number;
  logoURI: string;
}

interface TokenState {
  selectedToken: Token[];
}

const initialState: TokenState = {
  selectedToken: [],
};

export const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    userSelectTokens: (state, { payload }: PayloadAction<Token>) => {
      if (state.selectedToken.length) {
        const tokenExists = state.selectedToken.some(
          (token) => token.address === payload.address
        );
        if (!tokenExists) {
          state.selectedToken.push(payload);
        } else {
          state.selectedToken = state.selectedToken.filter(
            (token) => token.address !== payload.address
          );
        }
      } else {
        state.selectedToken.push(payload);
      }
    },
  },
});

export const { userSelectTokens } = tokenSlice.actions;
export default tokenSlice.reducer;
