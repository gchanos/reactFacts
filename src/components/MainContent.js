import React from "react"
import './styles.css'

export default function MainContent(props) {
    
    return (
        <main className={`${props.lightMode ? "mainContentLight" : "mainContent"}`}>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Is maiintained by Facebook</li>
            <li>Has well over 100K start on Github</li>
            <li>Powers thousands of enterprise apps, 
                including mobile apps</li>
        </ul>
        </main>
    )
}