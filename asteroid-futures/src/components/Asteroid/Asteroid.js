import React from "react";
import Ceres from '../../asteroid-img/Ceres.jpg';
import Pallas from '../../asteroid-img/Pallas.jpg';
import Hygiea from '../../asteroid-img/Hygiea.jpg';
import Victoria from '../../asteroid-img/Victoria.jpg';
import Egeria from '../../asteroid-img/Egeria.jpg';
import Psyche from '../../asteroid-img/Psyche.jpg';
import './Asteroid.css';

export default class FetchAsteroidName extends React.Component {

    state = {
        loading: true,
        asteroid: null,
    }

    async componentDidMount() {
        const url = `https://www.asterank.com/api/asterank?query={"a":{"$lt":5}}&limit=100`;

        // CERES 
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidName: response[0].full_name }));

        // PALLAS
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameTwo: response[1].full_name }));      

        // HYGIEA
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameThree: response[9].full_name }));

        // VICTORIA
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameFour: response[11].full_name }));

        // EGERIA
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameFive: response[12].full_name }));   
            
        // PSYCHE
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ asteroidNameSix: response[15].full_name }));       
    }


    
    render() {

        return <div>

            <div className='AsteroidImages'>

                <div className='astrImgs'>
                    <a href='/Asteroids/ceres/CeresPage' className='asterLink'>
                    <img src={Ceres} className='images' alt='Asteroid Ceres' />
                    <h3>{this.state.asteroidName}</h3> 
                    </a>
                </div>

                <div className='astrImgs'>
                    <a href='/Asteroids/pallas/PallasPage' className='asterLink'>
                    <img src={Pallas} className='images' alt='Asteroid Pallas' />
                    <h3>{this.state.asteroidNameTwo}</h3>
                    </a>
                </div>

                <div className='astrImgs'>
                    <a href='/Asteroids/hygiea/HygieaPage' className='asterLink'>
                    <img src={Hygiea} className='images' alt='Asteroid Hygiea' />
                    <h3>{this.state.asteroidNameThree}</h3>
                    </a>
                </div>

                <div className='astrImgs'>
                    <a href='/Asteroids/victoria/VictoriaPage' className='asterLink'>
                    <img src={Victoria} className='images' alt='Asteroid Victoria' />
                    <h3>{this.state.asteroidNameFour}</h3>
                    </a>
                </div>

                <div className='astrImgs'>
                    <a href='/Asteroids/egeria/EgeriaPage' className='asterLink'>
                    <img src={Egeria} className='images' alt='Asteroid Egeria' />
                    <h3>{this.state.asteroidNameFive}</h3>
                    </a>
                </div>

                <div className='astrImgs'>
                    <a href='/Asteroids/psyche/PsychePage' className='asterLink'>
                    <img src={Psyche} className='images' alt='Asteroid Psyche' />
                    <h3>{this.state.asteroidNameSix}</h3>
                    </a>
                </div>

            </div>

        </div>;
    }
}
