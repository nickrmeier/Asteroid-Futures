import React from "react";
import Egeria from './Egeria.jpg';
import { BrowserRouter, Route } from 'react-router-dom';
import './EgeriaPage.css';
import Composition from "../../Composition";

export default class EgeriaPage extends React.Component {
    state = {
        loading: true,
        asteroid: null,
    }

    async componentDidMount() {
        const url = `https://www.asterank.com/api/asterank?query={"a":{"$lt":5}}&limit=100`;

        // EGERIA 
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameFive: response[12].full_name, asteroidDiameterFive: response[12].diameter, asteroidTypeFive: response[12].spec, asteroidPriceFive: response[12].price, asteroidProfitFive: response[12].profit }));
    }        

    render() {
        return <div className='individualPages'>   
            <img src={Egeria} className='indivPageImgs' alt='Asteroid Egeria' />
            <h3 className='indivPageTextTitle'>{this.state.asteroidNameFive}</h3>
            <h4 className='indivPageTextDia'>Diameter: {this.state.asteroidDiameterFive} km</h4>
            <h4 className='indivPageTextType'>Type: {this.state.asteroidTypeFive}</h4>
            <h4 className='indivPageTextPrice'>Est. Value: $ {this.state.asteroidPriceFive}</h4>
            <h4 className='indivPageTextProfit'>Est. Profit: $ {this.state.asteroidProfitFive}</h4>   
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