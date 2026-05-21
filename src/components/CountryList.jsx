import React from 'react'
import CountryCard from './CountryCard.jsx'

function CountryList({ countries }) {
    if (!countries || countries.length === 0) {
        return <p>No countries to display.</p>
    }

    return (
        <div className="country-list">
            {countries.map(country => (
                <CountryCard key={country.name.common} country={country} />
            ))}
        </div>
    )
}

export default CountryList