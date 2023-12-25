import React from 'react';
import styles from "./ComponentStyles.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.divNavBar}>
      <button className={styles.button}>
        <Link to='/home'>Home</Link>
      </button>
      <h1 className={styles.pageTitle}>Search for What You Need</h1>
      <button className={styles.button}>
        <Link to='/form'>Register Activity</Link>
      </button>
    </div>
  )
}

export default NavBar