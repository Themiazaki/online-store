import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import About from './pages/About';

const App = () => {

  return(
    <Router>
      <Navbar/>
      <Sidebar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:id" exact children={<SingleProduct/>} />
          <Route path="/cart" exact component={Cart}/>
          <Route path="/about" exact component={About} />
        </Switch>
      <Footer/>
    </Router>
  )
}
export default App