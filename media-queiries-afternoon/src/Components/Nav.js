import React from 'react'

class Nav extends React.Component {
    constructor(){
        super()
        this.state = {
            "desktop-nav": true,
            "nav-menu": false,
            "navDropdown": "",
        }
    }

    toggleDropDown = () => {
        let newDropdownState = (this.state["navDropdown"] === "" ) ? "hide" : ""
        this.setState({
            "navDropdown": newDropdownState
        })
        console.log(this.state)
    }
    render(){
    const {navDropdown} = this.state
    const {toggleDropDown} = this
        
    return (
    <nav className="nav-container">
        <nav className="nav-container-inner">
            <div className="col space-between col1">
                <div className="logo">
                    <img className="logo-img" src={require("../media/navbar-logo.svg")} alt=""/>
                </div>
                <div className="desktop-nav display-desktop">
                    <ul className="nav-links">  
                        <li className="nav-link">SERVICES</li>
                        <li className="nav-link">PORTFOLIO</li>
                        <li className="nav-link">ABOUT</li>
                        <li className="nav-link">TEAM</li>
                        <li className="nav-link">CONTACT</li>
                    </ul>
                </div>

                <div className="desktop-nav display-mobile">
                    <button className="menu-btn hamburger-holder bg-yellow text-uppercase"
                    onClick={() => toggleDropDown()}>
                        <h3>Menu</h3>
                    <div>
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                        <div className="hamburger"></div>
                    </div>
                    </button>
                </div>
            </div>

                <div className="col col2">
                    <ul className={"nav-links-dropdown display-mobile " + navDropdown}>  
                        <li className="nav-link-dropdown">SERVICES</li>
                        <li className="nav-link-dropdown">PORTFOLIO</li>
                        <li className="nav-link-dropdown">ABOUT</li>
                        <li className="nav-link-dropdown">TEAM</li>
                        <li className="nav-link-dropdown">CONTACT</li>
                    </ul>
                </div>
        </nav>
    </nav>
        
    )}
}

export default Nav