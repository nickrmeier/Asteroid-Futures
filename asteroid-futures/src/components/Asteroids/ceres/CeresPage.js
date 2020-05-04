import React from "react";
import Ceres from './Ceres.jpg';
import { BrowserRouter, Route } from 'react-router-dom';
import './CeresPage.css';
import Composition from "../../Composition";

export default class CeresPage extends React.Component {
    state = {
        loading: true,
        asteroid: null,
    }

    async componentDidMount() {
        const url = `http://www.asterank.com/api/asterank?query={"a":{"$lt":5}}&limit=100`;

        // CERES 
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidName: response[0].full_name, asteroidDiameter: response[0].diameter, asteroidType: response[0].spec, asteroidPrice: response[0].price, asteroidProfit: response[0].profit }));
    }

    render() {
        return <div className='individualPages'>
                <img src={Ceres} className='indivPageImgs' alt='Asteroid Ceres' />
                <h3 className='indivPageTextTitle'>{this.state.asteroidName}</h3>
                <h4 className='indivPageTextDia'>Diameter: {this.state.asteroidDiameter} km</h4>
                <h4 className='indivPageTextType'>Type: {this.state.asteroidType}</h4>
                <h4 className='indivPageTextPrice'>Est. Value: $ {this.state.asteroidPrice}</h4>
                <h4 className='indivPageTextProfit'>Est. Profit: $ {this.state.asteroidProfit}</h4>

            <div className='findOutMore'>
                <h3 className='contactBlurb'>Find out the what commodities are available based on this asteroid type! </h3>
                 <a href='/components/Composition' className='contactButton'>
                <button href='/components/Composition' className='getStarted'>Types</button>
            </a>
            </div>



            <BrowserRouter>
                <Route path='/components/Composition' exact={true} component={Composition} />
            </BrowserRouter>

        </div>
    }
};    