import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ComponentStyles.module.css';

const Card = ({ id, flag, name, continent }) => {
  return (
    <div className={styles.divCard}>
      <div className={styles.divImg}>
        <img className={styles.img} src={flag} alt={name}/>
      </div>
      <div className={styles.divData}>
        <Link className={styles.name} to={`/detail/${id}`}>
          {name}
        </Link>
        <h2 className={styles.continent}>{continent}</h2>
      </div>
    </div>
  )
}

export default Card