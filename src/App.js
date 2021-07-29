import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/sign-up" component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
