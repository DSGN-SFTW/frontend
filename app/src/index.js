import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Contato from "./pages/Contato";
import Equipe from "./pages/Equipe";
import Exercicios from "./pages/Exercicios";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import * as serviceWorker from "./serviceWorker";
import { Private ,BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


ReactDOM.render(
  <BrowserRouter>
    <Header title="4code"  />
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/aulas" component={App} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/exercicios" component={Exercicios} />
      <Route path="/equipe" component={Equipe} />
      <Route path="/contato" component={Contato} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/login" component={Login} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
