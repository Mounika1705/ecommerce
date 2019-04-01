import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import Contact from './components/contact';
import Header from './header/header';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';
import Default from "./components/default";
import { Copyright } from './components/copyright';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch>
        <Footer/>
        <Copyright/>
      </React.Fragment>
    );
  }
}

export default App;
