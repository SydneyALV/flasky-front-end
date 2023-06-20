import React from 'react';
import Crystal from './Crystal'
import PropTypes from 'prop-types';
import './CrystalList.css'

const CrystalList = ({ crystals, removeCrystal, increaseCharge }) => {
    const crystalComponents = crystals.map(crystal => {
        return (
            <section key={crystal.id}>
                <Crystal 
                id={crystal.id}
                name={crystal.name}
                color={crystal.color} 
                powers={crystal.powers}
                charges={crystal.charges}
                removeCrystal={removeCrystal}
                increaseCharge={increaseCharge}
                />
            </section>
        )
    })

    return (
        <section>
            {/* <p>{greeting}</p> */}
            <h2>Crystal List</h2>
            <section id="crystal-list">
                {crystalComponents}
            </section>
        </section>
    )
}

CrystalList.propTypes = {
    crystals: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            powers: PropTypes.string.isRequired,
            charges: PropTypes.number.isRequired,
            increaseCharge: PropTypes.func,
            removeCrystal: PropTypes.func
        }
    )).isRequired
}

export default CrystalList;