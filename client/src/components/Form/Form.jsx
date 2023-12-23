import React from 'react'
import validate from './Validation'
import { getCountries, postActivity } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {

  const countries = useSelector((state) => state.countries);
  const newActivity = useSelector((state) => state.newActivity);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCountries);
  }, []);
  
  const [form, setForm] = React.useState({
    name: '',
    difficulty: 0,
    duration: '',
    season: '',
    countries: [],
  });

  const [errors, setErrors] = React.useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: '',
  });

  const [rating, setRating] = React.useState(0);

  const handleRating = (rating) => {
    setRating(rating);
    setForm({...form, difficulty: rating});
  };

  const handleCountries = (event) => {
    const name = event.target.value;
    for (let i=0; i<countries.length; i++) {
      if (name === countries[i].name) {
        setForm({...form, countries: [...form.countries, countries[i].id]})
        break;
      }
    }
  };

  const handleChange = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setForm({...form, [property]: value});
    validate(property, {...form, [property]: value}, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (form.difficulty === 0 || !form.season || !form.countries) {
      if (form.difficulty === 0) {
        setErrors({...errors, difficulty: 'Please establish how difficult the activity is.'});
      }
      if (!form.countries) {
        setErrors({...errors, countries: 'The activity must be available in at least one country.'});
      }
      alert('Please complete the needed information');
    } else if (errors.name || errors.difficulty || errors.duration || errors.season || errors.countries) {
      alert('Please complete the needed information');
    } else {
      dispatch(postActivity({...form, duration: Number(form.duration)}));
      alert('New activity created');
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Want to Register a New Activity?</h1>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
          ></input>
          <label>{errors.name}</label>
        </div>
        <div>
          <label htmlFor='difficulty'>Difficulty:</label>
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                name='difficulty'
                value={form.difficulty}
                onClick={() => handleRating(value)}
                style={{ color: value <= rating ? 'gold' : 'gray' }}
              >
                ★
              </button>
            ))}
          <label>{errors.difficulty}</label>
        </div>
        <div>
          <label htmlFor='duration'>Duration:</label>
          <input
            type='text'
            name='duration'
            value={form.duration}
            onChange={handleChange}
          ></input>
          <label>{errors.duration}</label>
        </div>
        <div>
          <label htmlFor='season'>Season:</label>
          <select name='season' onChange={handleChange}>
            <option value='NA'>--</option>
            <option value='Spring'>Spring</option>
            <option value='Summer'>Summer</option>
            <option value='Fall'>Fall</option>
            <option value='Winter'>Winter</option>
          </select>
          <label>{errors.season}</label>
        </div>
        <div>
          <label htmlFor='countries'>Countries where the activity is available:</label>
          <select multiple size={20} onChange={handleCountries}>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default Form