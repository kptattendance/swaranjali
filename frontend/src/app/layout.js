import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AnimatePresence, motion } from "framer-motion";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Swaranjali Music Academy",
  description: "Carnatic & Vocal Music Classes in Mangalore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-accent`}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
