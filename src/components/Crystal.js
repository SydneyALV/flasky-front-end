import React from 'react';
import PropTypes from 'prop-types';
import './Crystal.css'

const Crystal = ({ name, color, powers}) => {
    const [chargeCount, setCharge] = React.useState(0)
    
    return (
        <section>
            <h3>{name}</h3>
            <p>{color}</p>
            <p>{powers}</p>
            <button onClick={(e) => {
                setCharge(chargeCount + 1)
            }}>Charge Crystal</button>
            <p id="charge-amount">Your {name} crystal has been charged {chargeCount} times.</p>
        </section>
    )
}

Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired
}

export default Crystal;
