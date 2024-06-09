import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Md Jamshed Uddin",
  description:
    "I am Md Jamshed Uddin. As a web developer focused on fron-end I love to build intuitive and engaging web interfaces.I am also familiar with back-end technology like node js and it's framework express js and set goal to be a full-stack web developer with solid grasp on both front-end and back-end.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lato.className}>
        <div className="px-3 lg:px-16">
          <div>
            <Navbar />
          </div>
          <div className="min-h-[calc(100vh-4rem)]">{children}</div>
          <div></div>
        </div>
      </body>
    </html>
  );
}
