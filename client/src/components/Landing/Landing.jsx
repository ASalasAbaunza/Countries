import React from 'react';
import styles from './ComponentStyles.module.css';
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className={styles.divLandingImg}>
      <div className={styles.divLanding}>
        <div className={styles.divTitle}>The Best Activities in Any Country</div>
        <button className={styles.button}>
          <Link to='/home'>Enter</Link>
        </button>
      </div>
    </div>
  )
}

export default Landing