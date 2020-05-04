import React, { Component } from 'react';
import './Partners.css';


class Partners extends Component {

    render() {
        return (
            <div className='partnerDiv'>
            

                <h4 className='partnerTitle'>Partners</h4>
                <p className='partnerBlerb'>We work closely with our partners to ensure you get the most accurate information, and safest exploration tactics.</p>

                <ul className='partnerList'>
                    <li><a target='_blank' href='https://www.nasa.gov/'>NASA</a></li>
                    <li><a target='_blank' href='https://www.spacex.com/'>SpaceX</a></li>
                    <li><a target='_blank' href='https://www.blueorigin.com/'>Blue Origin</a></li>

              
                </ul>
                

            </div>
        );
    }
}

export default Partners;
