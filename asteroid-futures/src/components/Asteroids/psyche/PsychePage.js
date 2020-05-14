import React from 'react';
import Psyche from './Psyche.jpg';
import { BrowserRouter, Route } from 'react-router-dom';
import './PsychePage.css';
import Composition from '../../Composition';

export default class PsychePage extends React.Component {
    state = {
        loading: true,
        asteroid: null,
    }

    async componentDidMount() {
        const url = `https://www.asterank.com/api/asterank?query={"a":{"$lt":5}}&limit=100`;

        // HYGIEA 
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameSix: response[15].full_name, asteroidDiameterSix: response[15].diameter, asteroidTypeSix: response[15].spec, asteroidPriceSix: response[15].price, asteroidProfitSix: response[15].profit }));
    }        

    render() {
        return <div className='individualPages'>   
            <img src={Psyche} className='indivPageImgs' alt='Asteroid Psyche' />
            <h3 className='indivPageTextTitle'>{this.state.asteroidNameSix}</h3>
            <h4 className='indivPageTextDia'>Diameter: {this.state.asteroidDiameterSix} km</h4>
            <h4 className='indivPageTextType'>Type: {this.state.asteroidTypeSix}</h4>
            <h4 className='indivPageTextPrice'>Est. Value: $ {this.state.asteroidPriceSix}</h4>
            <h4 className='indivPageTextProfit'>Est. Profit: $ {this.state.asteroidProfitSix}</h4>   
            <h3 className='contactBlurb'>Find out the what commodities are available based on this asteroid type! </h3>
            <a href='/components/Composition' className='contactButton'>
                <button href='/components/Composition' className='getStarted'>Types</button>
            </a>

            <BrowserRouter>
                <Route path='/components/Composition' exact={true} component={Composition} />
            </BrowserRouter>
            </div>                   
    }
};    