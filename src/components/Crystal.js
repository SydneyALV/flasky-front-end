import React from 'react';
import PropTypes from 'prop-types';

const Crystal = (props) => {
    return (
        <section>
            <h3>{props.name}</h3>
            <p>{props.color}</p>
            <p>{props.powers}</p>
            <button>Charge Crystal</button>
        </section>
    )
}

Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired
}
export default Crystal;
