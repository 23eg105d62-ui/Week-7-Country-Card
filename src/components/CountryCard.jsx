import React from 'react'
function CountryCard({ country }) {
    if (!country) return null

    const { name, flags, capital, population, region } = country
    return (
        <div className="country-card">
            <img
                src={flags.png}
                alt={`Flag of ${name.common}`}
                className="country-flag"
            />
            <h3>{name.common}</h3>
            <p>
                <b>Capital:</b> {capital}
            </p>
            <p>
                <b>Population:</b> {population}
            </p>
            <p>
                <b>Region:</b> {region}
            </p>
        </div>
    )
}

export default CountryCard