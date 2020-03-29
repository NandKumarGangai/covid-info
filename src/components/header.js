import React from 'react'
import covidLogo from '../images/icon2.png';

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark text-light header">
            <img src={covidLogo} alt='' />
            <p className="navbar-brand">COVID-19 CORONAVIRUS DASHBOARD</p>
        </nav>
    )
}
