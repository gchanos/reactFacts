import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

export default function App() {
    const [lightMode, setLightMode] = React.useState(false)
    
    function handleLightMode () {
        setLightMode(prevMode => !prevMode)
    }


    return (
        <div className="mainContainer">
            <Header
                lightMode={lightMode}
                toggleLightMode={handleLightMode}
            />
            <MainContent 
                lightMode={lightMode}
            />
            <Footer 
                lightMode={lightMode}
            />
        </div>
    )
}
