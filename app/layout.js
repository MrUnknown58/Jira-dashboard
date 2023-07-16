import "./globals.css";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";
import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jira Tickets",
  description:
    "Created a Dashboard for the Assignment in which we can add some tickets to remember about the works pending,under review and done..  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {/* <SideBar /> */}
        {/* <Profile /> */}
        {children}
      </body>
    </html>
  );
}
