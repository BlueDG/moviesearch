import React from "react"

const cardStyle = {
    border: "1px solid red",
    borderRadius: "10px",
    width: "80px",
    height: "80px"
}

export default function Card ({children}) {
    return (
        <div style={cardStyle}>
            {children}
        </div>
    )
}