import React from 'react'

const ActivityMiniCard = ({ name, difficulty, duration, season }) => {

  const arrayLength = difficulty;
  const stars = [];
  const displayStars = () => {
    for (let i=1; i<=arrayLength; i++) {
        stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  return (
    <div>
        <h2>{name}</h2>
        <div>
            {displayStars()}
        </div>
        <h2>{duration} hrs.</h2>
        <h2>{season}</h2>
    </div>
  )
}

export default ActivityMiniCard