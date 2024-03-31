// SubOptions.js
import React from 'react';
import { useParams } from 'react-router-dom';

function SubOptions() {
    const { service } = useParams();

    return (
        <div>
            <h2>{service}</h2>
            {/* Display sub-options based on the selected service */}
        </div>
    );
}

export default SubOptions;
