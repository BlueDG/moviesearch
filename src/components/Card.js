import React from "react"
import styled, {css} from "@xstyled/styled-components"
import { up } from '@xstyled/system'

export const Container = styled.box`
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;
margin-top: 40px;
`

const Card = styled.div`
  color: #fff;
  text-shadow: 1px 1px 0 #000;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 200px;
  margin: 10px;
  border-radius: 6px;
  width: 100%;
  transition: 0.3s ease;
  cursor: pointer; 
  background: ${p => p.background ? `url(https://image.tmdb.org/t/p/original/${p.background}) no-repeat top center` : 'dimgrey'};
  &:hover{
    opacity: 0.6;
  }
  ${up(
    'md',
    css`
    width: 400px;
    `,
  )}
  `

Card.Body = styled.div`
  padding: 10px;
`

Card.Title = styled.h3`
  font-size: 1.2em;
  line-height: 1.2em;
  font-weight: 500;
  margin: 0;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
Card.Subtitle = styled.p`
  font-size: 0.9em;
  margin: 0;
`

export default function CardTemplate({movie}){
    return(
      <Card background={movie.backdrop_path}>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle>
          {movie.vote_average} ({movie.vote_count} votes)
        </Card.Subtitle>
      </Card.Body>
    </Card>
    )
}