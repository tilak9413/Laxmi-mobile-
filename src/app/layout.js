import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Laxmi Mobile - Aapka Bharosemand Mobile Shop",
  description:
    "Laxmi Mobile - Naye mobile phones, mobile repairing, accessories, recharge aur exchange offer. Best price aur genuine warranty ke saath.",
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>%F0%9F%93%B1</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-cream text-[#241016]">
        {children}
      </body>
    </html>
  );
}
