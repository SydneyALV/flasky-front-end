import React from 'react';
import Crystal from './Crystal'
import PropTypes from 'prop-types';

const CrystalList = ({ crystals }) => {
    const crystalComponents = crystals.map(crystal => {
        return (
            <section key={crystal.id}>
                <Crystal 
                id={crystal.id}
                name={crystal.name}
                color={crystal.color} 
                powers={crystal.powers}
                />
            </section>
        )
    })

    return (
        <section>
            {/* <p>{greeting}</p> */}
            <h2>Crystal List</h2>
            {crystalComponents}
        </section>
    )
}

CrystalList.propTypes = {
    crystals: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            powers: PropTypes.string.isRequired
        }
    )).isRequired
}

export default CrystalList;