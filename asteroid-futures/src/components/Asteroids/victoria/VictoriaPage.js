import React from 'react';
import Victoria from './Victoria.jpg';
import { BrowserRouter, Route } from 'react-router-dom';
import './VictoriaPage.css';
import Composition from '../../Composition';

export default class VictoriaPage extends React.Component {
    state = {
        loading: true,
        asteroid: null,
    }

    async componentDidMount() {
        const url = `https://www.asterank.com/api/asterank?query={"a":{"$lt":5}}&limit=100`;

        // PARTHENOPE
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameFour: response[11].full_name, asteroidDiameterFour: response[11].diameter, asteroidTypeFour: response[11].spec, asteroidPriceFour: response[11].price, asteroidProfitFour: response[11].profit }))
    }        
    

    render() {
        return <div className='individualPages'>   
            <img src={Victoria} className='indivPageImgs' alt='Asteroid Victoria' />
            <h3 className='indivPageTextTitle'>{this.state.asteroidNameFour}</h3>
            <h4 className='indivPageTextDia'>Diameter: {this.state.asteroidDiameterFour} km</h4>
            <h4 className='indivPageTextType'>Type: {this.state.asteroidTypeFour}</h4>
            <h4 className='indivPageTextPrice'>Est. Value: $ {this.state.asteroidPriceFour}</h4>
            <h4 className='indivPageTextProfit'>Est. Profit: $ {this.state.asteroidProfitFour}</h4> 
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