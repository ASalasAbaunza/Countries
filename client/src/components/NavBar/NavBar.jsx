import React from 'react';
import styles from "./ComponentStyles.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.divNavBar}>
      <div className={styles.divButtons}>
        <button className={styles.button}>
          <Link to='/home'>Home</Link>
        </button>
      </div>
      <div className={styles.divTitle}>
        <h1 className={styles.pageTitle}>Search for What You Need</h1>
      </div>
      <div className={styles.divButtons}>
        <button className={styles.button}>
          <Link to='/form'>Register Activity</Link>
        </button>
      </div>
    </div>
  )
}

export default NavBar