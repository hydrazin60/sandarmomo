import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home({ children }) {
  return (
    <>
      <Navbar />
      <main> {children} </main>
      <Footer />
    </>
  );
}
