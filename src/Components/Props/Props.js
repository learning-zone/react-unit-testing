import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Props(props) {

    const { header, description } = props;
    const { color, setColor } = useState("red");

    return (
        <>
            <h1 aria-label="header">{header}</h1>
            <p aria-label="description" style={{ color: color }}>{description}</p>

            <div>
                <input
                    type="checkbox"
                    name="checkbox"
                    onChange={(e) => setColor(e.target.checked ? "green" : "red")} />
            </div>
        </>
    )
}

Props.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string
}
