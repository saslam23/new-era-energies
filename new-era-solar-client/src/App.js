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

          <Route exact path="/location/florida" render={() =>(
            <h1>Florida</h1>
          )}/>

          <Route exact path="/location/florida/jacksonville" render={() =>(
            <h1>Jacksonville</h1>
          )}/>

          <Route exact path="/location/florida/pensacola" render={() =>(
            <h1>Pensacola</h1>
          )}/>

          <Route exact path="/location/arizona" render={() =>(
            <h1>Arizona</h1>
          )}/>

          <Route exact path="/location/arizona/phoenix" render={() =>(
            <h1>Phoenix</h1>
          )}/>


          <Route exact path="/location/arizona/tuscon" render={() =>(
            <h1>Tuscon</h1>
          )}/>

          <Route exact path="/location/arkansas" render={() =>(
            <h1>Arkansas</h1>
          )}/>

          <Route exact path="/location/arkansas/north-little-rock-ar" render={() =>(
            <h1>North little rock ar</h1>
          )}/>

          <Route exact path="/location/california" render={() =>(
            <h1>California</h1>
          )}/>

          <Route exact path="/location/nevada" render={() =>(
            <h1>Nevada</h1>
          )}/>

          <Route exact path="/location/texas" render={() =>(
            <h1>Texas</h1>
          )}/>

          <Route exact path="/location/texas/dallas" render={() =>(
            <h1>Dallas</h1>
          )}/>

          <Route exact path="/location/texas/tyler" render={() =>(
            <h1>Tyler</h1>
          )}/>

          <Route exact path="/location/texas/arlington" render={() =>(
            <h1>Arlington</h1>
          )}/>

          <Route exact path="/location/texas/san-antonio" render={() =>(
            <h1>San Antonio</h1>
          )}/>

          <Route exact path="/location/texas/corpus-christi" render={() =>(
            <h1>Corpus Christi</h1>
          )}/>




          <Route exact path="/location/florida" render={() =>(
            <h1>Florida</h1>
          )}/>


          <Route path="*" component={withRouter(NotFound)} />
        </Switch>

      </Router>
  


    </div>
  );
}

export default App;
