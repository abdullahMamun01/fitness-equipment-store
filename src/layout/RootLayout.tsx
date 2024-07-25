import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";


export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
}
