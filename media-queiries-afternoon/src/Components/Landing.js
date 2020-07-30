import React from 'react'

class Landing extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){ return (
        <section className="landing-container">
            <div className="landing-bg-img"></div>
            <div className="landing-inner">
                <h2 className="landing-h2">Welcome to our Studio!</h2>
                <h1 className="landing-h1">IT'S NICE TO MEET YOU</h1>
                <button className="landing-button bg-yellow">TELL ME MORE</button>
            </div>
        </section>
    )}
}
// media/header-bg.jpg
export default Landing