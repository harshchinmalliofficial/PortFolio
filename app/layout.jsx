import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DynamicBackground from "./components/DynamicBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh Chinmalli - My portfolio",
  description:
    "Portfolio showcasing my skills, projects, and achievements as a Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <DynamicBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
