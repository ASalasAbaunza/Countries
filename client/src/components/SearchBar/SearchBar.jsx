import React from 'react';
import styles from './ComponentStyles.module.css';

const SearchBar = (props) => {
  
  const [search, setSearch] = React.useState('');
  const [backButton, setBackButton] = React.useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.divSearchBar}>
      <input className={styles.input} type='text' onChange={handleChange}/>
      <button className={styles.button} style={{marginLeft: '2px'}} onClick={() => {
        setBackButton(true);
        props.onSearch(search);
      }}>Search</button>
      <button className={styles.button} style={{marginLeft: '10px'}} onClick={() => {
        setBackButton(false);
        props.backToAll();
      }} disabled={!backButton}>Back to All</button>
    </div>
  )
}

export default SearchBar