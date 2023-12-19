import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ id, flag, name, continent }) => {
  return (
    <div>
        <img src={flag} alt={name}/>
        <Link to={`/detail/${id}`}>
          <h1>{name}</h1>
        </Link>
        <h2>{continent}</h2>
    </div>
  )
}

export default Card