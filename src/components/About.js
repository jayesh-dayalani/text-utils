import React, { useState } from 'react'

export default function About() {

    const [myStyle, setStyle] = useState({
        backgroundColor: "black",
        color: "white"
    })

    const toggleColor = () => {
        if (myStyle.color === "white") {
            setStyle({
                backgroundColor: "white",
                color: "black"
            })
        }
        else {
            setStyle({
                backgroundColor: "black",
                color: "white"
            })
        }
    }

    return (
        <>
            <div className="container my-3">
                <div className="my-3">
                    <h1>About Us</h1>
                </div>


                <div className="card" style={myStyle}>
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>            <div className="my-3">
                    <button className="btn btn-primary" onClick={toggleColor}>
                        Dark Mode
                    </button>
                </div>
            </div>
        </>
    )
}
