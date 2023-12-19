import React from 'react'

const SearchBar = (props) => {
  
  const [search, setSearch] = React.useState('');
  const [backButton, setBackButton] = React.useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input type='text' onChange={handleChange}/>
      <button onClick={() => {
        setBackButton(true);
        props.onSearch(search);
      }}>Search</button>
      <button onClick={() => {
        setBackButton(false);
        props.backToAll();
      }} disabled={!backButton}>Back to All</button>
    </div>
  )
}

export default SearchBar