import React from 'react';
import styles from "./ComponentStyles.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <button>
        <Link to='/home'>Home</Link>
      </button>
      <button>
        <Link to='/form'>Register Activity</Link>
      </button>
    </div>
  )
}

export default NavBar