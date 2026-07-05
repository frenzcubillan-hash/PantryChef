import "./globals.css";

import {
  Inter,
  Cormorant_Garamond,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "PantryChef",
  description: "Cook with ingredients you already have.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}