import React from 'react';
import styles from "./ComponentStyles.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <button>
        <Link to='/home'>Home</Link>
      </button>
      <button>
        <Link to='/form'>Register Activity</Link>
      </button>
      <SearchBar onSearch={props.onSearch}/>
    </div>
  )
}

export default NavBar