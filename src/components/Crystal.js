import React from 'react';
import PropTypes from 'prop-types';
import './Crystal.css'

const Crystal = ({ id, name, color, powers, charges, removeCrystal, increaseCharge }) => {

    return (
        <section id="crystal">
            <h3>{name}</h3>
            <p>Color: {color}</p>
            <p>Powers: {powers}</p>
            <button onClick={() => increaseCharge(id)}>Charge Crystal</button>
            <p id="charge-amount">Your {name} crystal has been charged {charges} times.</p>
            <button onClick={() => removeCrystal(id)}>Click to remove crystal</button>
        </section>
    )
}

Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired,
    charges: PropTypes.number.isRequired,
    increaseCharge: PropTypes.func,
    removeCrystal: PropTypes.func
}

export default Crystal;
