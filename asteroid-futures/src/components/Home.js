import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Asteroids from './Asteroids/Asteroids';
import './Home.css';

class Home extends Component {

    render() {

        return (
            <>
                <div className='home'>

                    <p>Whether you're a career investor or just curious, Asteroid Futures is built to help you make the most of your money—today, tomorrow, and beyond.</p>


                    <a href='/components/Asteroids' className='button'>
                        <button href='/components/Asteroids' className='getStarted'>Get Started</button>
                    </a>

                    <BrowserRouter>
                        <Route path='/components/Asteroids' exact={true} component={Asteroids} />
                    </BrowserRouter>

                </div>



            </>


        );
    }
}
export default Home;