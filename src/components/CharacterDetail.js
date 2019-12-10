import React from 'react'

const CharacterDetail = (props) => {
  if (!props.character) return null;
  return (
    <div>
    <h2>{props.character.name}</h2>
    <h3>{props.character.house}</h3>
    <h3>{props.character.gender}</h3>
    <h4>{props.character.species}</h4>
    <img src={props.character.image}/>
    </div>
  )
}
export default CharacterDetail;
