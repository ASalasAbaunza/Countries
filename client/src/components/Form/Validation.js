export default function validate (property, form, errors, setErrors) {
    if (property === 'name') {
        if (!form.name) {
            setErrors({...errors, name: 'Missing name for the activity'});
        } else if (form.name.length > 30) {
            setErrors({...errors, name: 'Activity length must be less than 30 characters'});
        } else {
            setErrors({...errors, name: ''});
        }
    } else if (property === 'duration') {
        if (!form.duration) {
            setErrors({...errors, duration: 'Missing duration of the activity'})
        } else {
            let duration = Number(form.duration);
            if (isNaN(duration)) {
                setErrors({...errors, duration: 'Duration must be a number'});
            } else {
                const decimals = (form.duration.split('.')[1] || '').length;
                if (decimals > 2) {
                    setErrors({...errors, duration: 'The duration of an activity can only have two decimals'});
                } else if (duration > 2190) {
                    setErrors({...errors, duration: 'The duration of an activity cannot be longer than the equivalent of 3 months'});
                } else {
                    setErrors({...errors, duration: ''});
                }
            }
        }
    } else {
        if (form.season === 'NA') {
            setErrors({...errors, season: 'Please select a season in which the activity can be performed'});
        } else {
            setErrors({...errors, season: ''});
        }
    }
}