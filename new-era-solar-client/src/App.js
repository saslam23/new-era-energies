import Banner from "./sections/Hero/Banner";
import Navbar from './sections/Navigation/Navbar';
import WhyGoSolar from "./sections/why-go-solar/WhyGoSolar";
import SolarProcess from "./sections/solar-process/SolarProcess";
import GetAQuote from "./sections/GetAQuote";
import About from "./sections/About";
import {Contact} from "./sections/Contact/Contact";
import Footer from "./sections/Footer";
import React,{useEffect} from 'react'
import Faq from "./sections/Faq/Faq";
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import NotFound from "./sections/NotFound"; 



function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() =>(
            <div>
                  <Navbar/>
               <Banner id="home"/>
              <WhyGoSolar />
              <GetAQuote id="getAQuote"/>
              <SolarProcess />
              <About />
              <Contact/>
              <Faq/>               
              <Footer/>
              
            </div>
          )}/>
                  <Route path="*" component={withRouter(NotFound)} />
        </Switch>

      </Router>
  


    </div>
  );
}

export default App;
