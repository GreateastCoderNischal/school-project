import { Roboto } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({ subsets: ["latin"],weight:["700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className+' bg-dark-1'}>{children}</body>
    </html>
  );
}
