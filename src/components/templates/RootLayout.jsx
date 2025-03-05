import React from "react";
import Footer from "../blocks/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../blocks/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
