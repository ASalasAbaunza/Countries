import React from 'react';
import styles from './ComponentStyles.module.css';

const ActivityMiniCard = ({ name, difficulty, duration, season }) => {

  const arrayLength = difficulty;
  const stars = [];
  const displayStars = () => {
    for (let i=1; i<=arrayLength; i++) {
        stars.push(<span className={styles.data} key={i}>★</span>);
    }
    return stars;
  };

  return (
    <div className={styles.divMiniCard}>
      <h2 className={styles.name}>{name}</h2>
      <h2 className={styles.data}>Activity duration: {duration} hrs.</h2>
      <div className={styles.data}>
        Difficulty: {displayStars()}
      </div>
      <h2 className={styles.data}>Season: {season}</h2>
    </div>
  )
}

export default ActivityMiniCard