import React from 'react'
import validate from './Validation'
import { getCountries, postActivity } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ComponentStyles.module.css';

const Form = () => {

  const countries = useSelector((state) => state.countries);
  const newActivity = useSelector((state) => state.newActivity);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCountries);
    return () => {
      setForm({...form, name: '', difficulty: 0, duration: '', season: '', countries: []});
    };
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
  const [formSubmitted, setFormSubmitted] = React.useState(false);

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
      if (!form.season) {
        setErrors({...errors, countries: 'Please establish a season when the activity is available'});
      }
      alert('Please complete the needed information');
    } else if (errors.name || errors.difficulty || errors.duration || errors.season || errors.countries) {
      alert('Please complete the needed information');
    } else {
      dispatch(postActivity({...form, duration: Number(form.duration)}));
      setForm({...form, name: '', difficulty: 0, duration: '', season: '', countries: []});
      setRating(0);
      setFormSubmitted(true);
      alert('New activity created');
    }
  }

  return (
    <div className={styles.divGeneral}>
      <div className={styles.divForm}>
        <form onSubmit={submitHandler}>
          <h1 className={styles.title}>Want to Register a New Activity?</h1>
          <div className={styles.divBlocks}>
            <div>
              <div className={styles.divLabelInputErrors}>
                <div className={styles.divLabelInput}>
                  <label className={styles.label} htmlFor='name'>Name:</label>
                  <input className={styles.input}
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                  ></input>
                </div>
                <label className={styles.labelError}>{errors.name}</label>
              </div>
              <div className={styles.divLabelInputErrors}>
                <div className={styles.divLabelInput}>
                  <label className={styles.label} htmlFor='difficulty'>Difficulty:</label>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button className={styles.buttonDifficulty}
                      key={value}
                      type="button"
                      name='difficulty'
                      value={form.difficulty}
                      onClick={() => handleRating(value)}
                      style={{ color: value <= rating ? 'gold' : 'white' }}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <label className={styles.labelError}>{errors.difficulty}</label>
              </div>
              <div className={styles.divLabelInputErrors}>
                <div className={styles.divLabelInput}>
                  <label className={styles.label} htmlFor='duration'>Duration:</label>
                  <input className={styles.input}
                    type='text'
                    name='duration'
                    value={form.duration}
                    onChange={handleChange}
                  ></input>
                </div>
                <label className={styles.labelError}>{errors.duration}</label>
              </div>
              <div className={styles.divLabelInputErrors}>
                <div className={styles.divLabelInput}>
                  <label className={styles.label} htmlFor='season'>Season:</label>
                  <select className={styles.input} name='season' onChange={handleChange}>
                    <option value='NA'>--</option>
                    <option value='Spring'>Spring</option>
                    <option value='Summer'>Summer</option>
                    <option value='Fall'>Fall</option>
                    <option value='Winter'>Winter</option>
                  </select>
                </div>
                <label className={styles.labelError}>{errors.season}</label>
              </div>
            </div>
            <div className={styles.divCountryList}>
              <label className={styles.label} htmlFor='countries'>Countries Where the Activity Is Available</label>
              <select
                className={`${styles.input} ${styles.customSelect}`}
                multiple
                size={20}
                onChange={handleCountries}
                value={form.countries.map((id) => countries.find((country) => country.id === id)?.name || '')}
                style={{ background: formSubmitted ? '' : '#A6AFB7ff' }}
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <label className={styles.labelError}>{errors.countries}</label>
            </div>
          </div>
          <button className={styles.button} type='submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Form