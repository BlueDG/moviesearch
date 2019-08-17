import React from "react"
import styled from "@xstyled/styled-components"

const InputText = styled.input`
padding: 10px;
border-radius: 10px;
width: 300px;
&:focus{
    outline: none !important;
    border-color: limegreen;
}
`

export default function Input({setRequest}){
    return (
        <InputText type="text" placeholder="Search a movie" onChange={(e)=> setRequest(e.target.value)}/>
    )
}