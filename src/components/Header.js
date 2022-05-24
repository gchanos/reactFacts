import React from "react"
import './styles.css'

export default function Header(props) {
    return (
        
            <nav 
            className={props.lightMode ? "light" : ""}
            >
                <div className="logo-container">
                 <img src={require('../images/react-logo.png')} alt="React Logo" className="logo" />
                 <h1>ReactFacts</h1>
                </div>
                 <h2 className="nav-items">
                    <div className="toggler">
                        <p className="toggler--dark">Dark</p>
                        <div 
                        className="toggler--slider"
                        onClick={props.toggleLightMode}
                        >
                            <div className="toggler--slider--circle"></div>    
                        </div>    
                        <p className="toggler--light">Light</p>
                    </div>
                 </h2>
            </nav>
        
    )
}