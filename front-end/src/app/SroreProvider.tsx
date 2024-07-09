"use client";

import React from "react";
import { ReduxProviders } from "@/libs/reduxProviders";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ReduxProviders>{children}</ReduxProviders>
    </div>
  );
}

export default Providers;
