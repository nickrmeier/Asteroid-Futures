import React from 'react';
import Hygiea from './Hygiea.jpg';
import { BrowserRouter, Route } from 'react-router-dom';
import './HygieaPage.css';
import Composition from '../../Composition';

export default class HygieaPage extends React.Component {
    state = {
        loading: true,
        asteroid: null,
    }

    async componentDidMount() {
        const url = `https://www.asterank.com/api/asterank?query={"a":{"$lt":5}}&limit=100`;

        // HYGIEA 
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameThree: response[9].full_name, asteroidDiameterThree: response[9].diameter, asteroidTypeThree: response[9].spec, asteroidPriceThree: response[9].price, asteroidProfitThree: response[9].profit }));
    }        

    render() {
        return <div className='individualPages'>   
            <img src={Hygiea} className='indivPageImgs' alt='Asteroid Hygiea' />
            <h3 className='indivPageTextTitle'>{this.state.asteroidNameThree}</h3>
            <h4 className='indivPageTextDia'>Diameter: {this.state.asteroidDiameterThree} km</h4>
            <h4 className='indivPageTextType'>Type: {this.state.asteroidTypeThree}</h4>
            <h4 className='indivPageTextPrice'>Est. Value: $ {this.state.asteroidPriceThree}</h4>
            <h4 className='indivPageTextProfit'>Est. Profit: $ {this.state.asteroidProfitThree}</h4>   
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