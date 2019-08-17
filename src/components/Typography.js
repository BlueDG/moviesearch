import React from "react"

export default function Typography ({variant, children}){
        return (
            <div style={{color: variant=== "title" ? "red" : "black"}}>
            {children}
            </div>
        )
}