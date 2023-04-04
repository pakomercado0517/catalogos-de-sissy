import React from "react";
import "./App.css";
import "./Card.css";
import "./Footer.css";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CatalogosList from "./components/CatalogosList";
import { NotFound } from "./Pages/NotFound";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ModalCatalogo } from "./components/ModalCatalogo";
import Cotizacion from "./Pages/Cotizacion";
import CountMoney from "./Pages/CountMoney";

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/count/money" component={CountMoney} />
        <Route exact path="/catalogos/:name" component={CatalogosList} />
        <Route exact path="/cotizacion" component={Cotizacion} />
        {/* <Route path="/:url" component={ModalCatalogo} /> */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
