import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCountryDetail } from '../../redux/actions';
import ActivityMiniCard from '../ActivityCountryCard/ActivityMiniCard';
import styles from './ComponentStyles.module.css';

const Detail = () => {
  
  const country = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  let { id } = useParams();

  React.useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [id]);

  let { name, flag, continent, capital, subregion, area, population, Activities } = country;

  const [page, setPage] = React.useState(1);
  const elements = 2;
  const last = page*elements;
  const first = last-elements;
  const currentPage = Activities && Array.isArray(Activities)
  ? Activities.slice(first, last) : null;

  const activityDisplay = currentPage && currentPage.map((activity) => (
    <ActivityMiniCard 
      key={activity.id}
      name={activity.name}
      difficulty={activity.difficulty}
      duration={activity.duration}
      season={activity.season}
    />
  ));
  
  return (
    <div>
      <div className={styles.divDetail}>
        <div className={styles.divData}>
          <h1 className={styles.name}>{name} ({id})</h1>
          <h1 className={styles.data}>Continent: {continent}</h1>
          <h1 className={styles.data}>Capital: {capital}</h1>
          <h1 className={styles.data}>Subregion: {subregion}</h1>
          <h1 className={styles.data}>Area: {area} km2</h1>
          <h1 className={styles.data}>Population: {population}</h1>
        </div>
        <div className={styles.divImg}>
          {flag ? (
            <img src={flag} alt={name}/>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        {activityDisplay && Activities && Activities.length > 0 && (
          <div className={styles.divActivityData}>
            <h1 className={styles.name}>Available Activities</h1>
            <div className={styles.divMiniCards}>
            {activityDisplay}
            </div>
            <div className={styles.divButtons}>
              <button className={styles.button} onClick={() => setPage(1)} disabled={page === 1}>
                First Page
              </button>
              <button className={styles.button} onClick={() => setPage(page-1)} disabled={page === 1}>
                Previous Page
              </button>
              <button className={styles.button} onClick={() => setPage(page+1)} disabled={last >= Activities.length}>
                Next Page
              </button>
              <button className={styles.button} onClick={() => setPage(Math.ceil(Activities.length/elements))} disabled={last >= Activities.length}>
                Last Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Detail