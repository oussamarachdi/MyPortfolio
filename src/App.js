import './App.css';
import NavBar from './components/Navigation/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Particles from 'react-particles-js';
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from './components/Header/Header';
import Projects from './components/projects/Projects';
import ContactMe from './components/contact-me/ContactMe';


function App() {
  return (
    <>
      
      <Router>
        <NavBar />
        <Switch>
            <Route path='/' exact>
            <Particles
      className="particles-canvas"
                params={{
                    particles :{
                        number:{
                            value:30,
                            density: {
                                enable : true,
                                value_area : 900
                            }
                        },
                        shape : {
                          type:"circle",
                          stroke:{
                            width:6,
                            color:"#f9ab00"
                          }
                            
                        }
                    }
                }} />
                <Header />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact-me">
            <ContactMe />
          </Route>
        </Switch>
          
      </Router>
      
      
    </>
  );
}

export default App;
