import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCountryDetail } from '../../redux/actions';
import ActivityMiniCard from '../ActivityCountryCard/ActivityMiniCard';

const Detail = () => {
  
  const country = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();
  let { id } = useParams();

  React.useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [id]);

  let { name, flag, continent, capital, subregion, area, population, Activities } = country;

  const activityDisplay = Activities && Array.isArray(Activities)
  ? Activities.map((activity) => (
      <ActivityMiniCard 
        key={activity.id}
        name={activity.name}
        difficulty={activity.difficulty}
        duration={activity.duration}
        season={activity.season}
      />
    ))
  : null;
  
  return (
    <div>
      <div>
        {flag ? (
          <img src={flag} alt={name}/>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <h1>{name}</h1>
      <h1>{id}</h1>
      <h1>{continent}</h1>
      <h1>{capital}</h1>
      <h1>{subregion}</h1>
      <h1>{area}</h1>
      <h1>{population}</h1>
      <div>
        {activityDisplay}
      </div>
    </div>
  )
}

export default Detail