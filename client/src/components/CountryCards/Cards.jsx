import React, { useState } from 'react';
import Card from '../CountryCard/Card';

const Cards = (props) => {
  
  const [page, setPage] = useState(1);
  const elements = 10;
  const last = page*elements;
  const first = last-elements;
  const currentPage = props.countries.slice(first, last);

  const countryList = currentPage.map((country) => {
    return (
        <Card 
            key={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
            id={country.id}
    />);
  });

  return (
    <div>
        {countryList}
        <div>
          <button onClick={() => setPage(1)} disabled={page === 1}>
            First Page
          </button>
          <button onClick={() => setPage(page-1)} disabled={page === 1}>
            Previous Page
          </button>
          <button onClick={() => setPage(page+1)} disabled={last >= props.countries.length}>
            Next Page
          </button>
          <button onClick={() => setPage(Math.floor(props.countries.length/elements))} disabled={last >= props.countries.length}>
            Last Page
          </button>
      </div>
    </div>
  )
}

export default Cards