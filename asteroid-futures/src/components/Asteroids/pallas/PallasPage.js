import React from 'react';
import Pallas from './Pallas.jpg';
import { BrowserRouter, Route } from 'react-router-dom';
import './PallasPage.css';
import Composition from '../../Composition';

export default class PallasPage extends React.Component {
    state = {
        loading: true,
        asteroid: null,
    }

    async componentDidMount() {
        const url = `http://www.asterank.com/api/asterank?query={"a":{"$lt":5}}&limit=100`;

        // PALLAS
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameTwo: response[1].full_name, asteroidDiameterTwo: response[1].diameter, asteroidTypeTwo: response[1].spec, asteroidPriceTwo: response[1].price, asteroidProfitTwo: response[1].profit }))
    }        

    render() {
        return <div className='individualPages'>   
            <img src={Pallas} className='indivPageImgs' alt='Asteroid Pallas' />
            <h3 className='indivPageTextTitle'>{this.state.asteroidNameTwo}</h3>
            <h4 className='indivPageTextDia'>Diameter: {this.state.asteroidDiameterTwo} km</h4>
            <h4 className='indivPageTextType'>Type: {this.state.asteroidTypeTwo}</h4>
            <h4 className='indivPageTextPrice'>Est. Value: $ {this.state.asteroidPriceTwo}</h4>
            <h4 className='indivPageTextProfit'>Est. Profit: $ {this.state.asteroidProfitTwo}</h4> 
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