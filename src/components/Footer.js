import React from "react"
import './styles.css'


export default function Footer(props) {
    return (
        <footer 
        className={props.lightMode ? "light" : ""}
        >
            <small>© 2021 Chan's development. All rights reserved.</small>
        </footer>
    )
}