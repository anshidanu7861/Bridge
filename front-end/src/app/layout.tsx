import type { Metadata } from "next";
import "./globals.css";
import Providers from "./SroreProvider";

export const metadata: Metadata = {
  title: "Bridge",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"p-10"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
