import React from "react"
import styled from "@xstyled/styled-components"

const InputSelect = styled.select`
    margin-left: 20px;
    height: 30px;
    width: 40px;
    border: 1px solid dimgray;
    &:focus{
        outline: none !important;
        border-color: limegreen;
    }
`

export default function Select({setRating}){
    return (
        <InputSelect onChange={(e)=> setRating(e.target.value)}>
        {Array.from({length: 10}).map((_, i)=><option key={i}>{i}</option>)}
        </InputSelect>
    )
}
