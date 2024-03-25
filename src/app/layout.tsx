import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divine Onyekachukwu",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" w-full scroll-smooth" lang="en">
      <body className={` overflow-x-hidden ${inter.className} bg-bgColor`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
