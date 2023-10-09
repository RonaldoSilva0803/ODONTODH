import { BrowserRouter } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./componentes/NavBar/NavBar";
import Home from "./Routes/Home";
import Footer from "./componentes/Footer/Footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
