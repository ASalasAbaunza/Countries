import React from 'react';
import Cards from '../CountryCards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { filterCountries, getCountries, orderCountries, searchCountry } from '../../redux/actions';
import styles from './ComponentStyles.module.css';

const Home = () => {

  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const onSearch = (search) => {
    search = search.trim();
    dispatch(searchCountry(search));
  };

  const handleOrder = (event) => {
    dispatch(orderCountries(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCountries(event.target.value));
  };

  const backToAll = () => {
    dispatch(getCountries());
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={styles.divHome}>
      <div className={styles.divSearchFilters}>
        <div className={styles.divFilters}>
          <div className={styles.divSelectors}>
            <label className={styles.labels} for='sort'>Sort</label>
            <select className={styles.selector} onChange={handleOrder}>
              <option value='--'>--</option>
              <option value='Name'>By Name</option>
              <option value='Population'>By Population</option>
            </select>
          </div>
          <div className={styles.divSelectors}>
            <label className={styles.labels} for='filter'>Filter By</label>
            <select className={styles.selector} onChange={handleFilter}>
              <option value='All'>All</option>
              <optgroup label='Continent'>
                <option value='North America'>North America</option>
                <option value='South America'>South America</option>
                <option value='Europe'>Europe</option>
                <option value='Asia'>Asia</option>
                <option value='Africa'>Africa</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctica'>Antarctica</option>
              </optgroup>
              <optgroup label='Activity Type'>
                <option value='Spring'>Spring</option>
                <option value='Summer'>Summer</option>
                <option value='Fall'>Fall</option>
                <option value='Winter'>Winter</option>
              </optgroup>
            </select>
          </div>
        </div>
        <SearchBar onSearch={onSearch} backToAll={backToAll}/>
      </div>
      <Cards countries={countries} />
    </div>
  )
}

export default Home