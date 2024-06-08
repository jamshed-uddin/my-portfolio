import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Md Jamshed Uddin",
  description: "Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
