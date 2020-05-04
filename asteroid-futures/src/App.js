import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Asteroids from './components/Asteroids/Asteroids'
import Partners from './components/Partners'
import Composition from './components/Composition';
import Home from './components/Home';
import Icon from './icon.svg';
import CeresPage from './components/Asteroids/ceres/CeresPage';
import PallasPage from './components/Asteroids/pallas/PallasPage';
import HygieaPage from './components/Asteroids/hygiea/HygieaPage';
import VictoriaPage from './components/Asteroids/victoria/VictoriaPage';
import EgeriaPage from './components/Asteroids/egeria/EgeriaPage';
import PsychePage from './components/Asteroids/psyche/PsychePage';

class App extends Component {

  render() {
    return (
      <div className='container'>

        <nav>
          <h1>
            <img src={Icon} className='App-logo' alt='logo' />
            ASTEROID FUTURES
          </h1>
          
          <a href='/' className='homeButton'>Home</a>
          <a href='/components/Asteroids' className='asteroids'>Asteroids</a>
          <a href='/components/Composition' className='composition'>Types</a>
          <a href='/components/Partners' className='partners'>Partners</a>
        </nav>

        <BrowserRouter>
          <Route path='/' exact={true} component={Home} />
          <Route path='/components/Asteroids' exact={true} component={Asteroids} />
          <Route path='/components/Composition' exact={true} component={Composition} />
          <Route path='/components/Partners' exact={true} component={Partners} />
          <Route path='/Asteroids/ceres/CeresPage' exact={true} component={CeresPage} />
          <Route path='/Asteroids/pallas/PallasPage' exact={true} component={PallasPage} />
          <Route path='/Asteroids/hygiea/HygieaPage' exact={true} component={HygieaPage} />
          <Route path='/Asteroids/victoria/VictoriaPage' exact={true} component={VictoriaPage} />
          <Route path='/Asteroids/egeria/EgeriaPage' exact={true} component={EgeriaPage} />
          <Route path='/Asteroids/psyche/PsychePage' exact={true} component={PsychePage} />
        </BrowserRouter>

        <footer>
          <p className='line'></p>
          <p className='about'>About</p>
          <p className='security'>Security</p>
          <p className='contact'>Contact</p>
        </footer>

      </div>
    );
  }

};

export default App;
