import React from 'react'

const CharacterCard = ({animeDirection, name, gender, culture, aliases, playedBy}) => {
  return (
    <li className={animeDirection ? 'slide-left character-card' : 'slide-right character-card'}>
      <h4>
        <span>name </span>
        <span>{name}</span>
      </h4>
      <h4>
        <span>gender </span>
        <span>{gender}</span>
      </h4>
      <h4>
        <span>culture </span>
        <span>{culture !== '' ? culture : '-'}</span>
      </h4>
      <h4>
        <span>also known as </span>
        <span>{aliases[0].length > 0 ? aliases.join(", "): '-'}</span>
      </h4>
      <h4>
        <span>played by </span>
        <span>{playedBy[0].length > 0 ? playedBy.join(", ") : '-'}</span>
      </h4>
    </li>
  )
}

export default CharacterCard