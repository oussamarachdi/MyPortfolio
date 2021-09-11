import './App.css';
import NavBar from './components/Navigation/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import React from 'react';
import Particles from 'react-particles-js';

function App() {
  return (
    <>
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
                }} 
                />
      <NavBar />
      <Header />
    </>
  );
}

export default App;
