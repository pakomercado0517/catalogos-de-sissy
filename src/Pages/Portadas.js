import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CatalogosList } from "./../components/CatalogosList";

export const Portadas = () => {
  return (
    <div>
      <Header />
      <CatalogosList />
      <Footer />
    </div>
  );
};
