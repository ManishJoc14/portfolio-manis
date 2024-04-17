import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import ogimage from "../../public/manish.jpg" 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manish",
  description: "The best portfolio website ever!",
  image: ogimage,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
