import React, { Component } from "react";
import './Composition.css';

class Composition extends Component {

    render() {
        return (
            <div>
                <h4 className='typesHeading'>Types</h4>

                <p className='blerb'>An asteroid's type is determined by it's composition of materials. At Asteroid Futures, we see the potential of these materials to improve life on earth.</p>

                <ul className='list'>
                    <li>C: Nickel, Iron, Colbalt</li>
                    <li>Sk: Magnesium Silicate, Iron Silicate</li>
                    <li>B: Iron, Hydrogen, Ammonia, Nitrogen</li>
                    <li>X: Nickel, Iron, Colbalt</li>
                    <li>Xc: Platinum, Nickel, Iron, Colbalt</li>
                    <li>Cg: Nickel, Iron, Colbalt, Water, Nitrogen, Hydrogen, Ammonia</li>
                    <li>L: Magnesium Silicate, Aluminum, Iron Silicate</li>
                </ul>

            </div>
        );
    }
}

export default Composition;
