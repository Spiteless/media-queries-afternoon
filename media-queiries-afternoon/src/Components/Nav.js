import React from 'react'

class Nav extends React.Component {
    constructor(){
        super()
        this.state = {
            "desktop-nav": true,
            "nav-menu": false,
            "nav-dropdown": false,
        }
    }
    render(){ return (
    <nav className="nav-container">
        <nav className="nav-container-inner">
            <div className="logo">
                <img className="logo-img" src={require("../media/navbar-logo.svg")} alt=""/>
            </div>
            <div className="desktop-nav">
                <ul className="nav-links">
                    <li className="nav-link">SERVICES</li>
                    <li className="nav-link">PORTFOLIO</li>
                    <li className="nav-link">ABOUT</li>
                    <li className="nav-link">TEAM</li>
                    <li className="nav-link">CONTACT</li>
                </ul>
            </div>
        </nav>
    </nav>
        
    )}
}

export default Nav