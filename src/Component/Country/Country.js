import React from 'react';
import './Country.css';
const Country = (props) => {
    const {capital ,flags,population} = props.countey;
    //console.log(props);
    const reciveCountry =props.addCounty;
    return (
        <div className="country">
            <h1>Capital: {capital}</h1>
            <h2> Population : {population} </h2>
            <img src={flags.png} alt=""/>
            <br/>
            <button onClick={() => reciveCountry(props.countey)}>add Country</button>
        </div>
    );
};

export default Country;