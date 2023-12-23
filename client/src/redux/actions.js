import axios from 'axios';

import { 
    GET_ACTIVITIES, 
    GET_COUNTRIES, 
    GET_COUNTRY_DETAIL, 
    POST_ACTIVITY, 
    ORDER_COUNTRIES, 
    FILTER_COUNTRIES, 
    SEARCH_COUNTRY, 
} from './actionTypes';

export const getCountries = () => {
    const URL = 'http://localhost:3001/countries';
    return async (dispatch) => {
        try {
            let res = await axios.get(URL);
            if (res.data.error) {
                window.alert(res.data.error);
            } else {
                return dispatch({
                    type: GET_COUNTRIES,
                    payload: res.data,
                });
            }
        } catch (error) {
            window.alert(error.message);
        }
    }
};

export const getCountryDetail = (id) => {
    const URL = `http://localhost:3001/countries/${id}`;
    return async (dispatch) => {
        try {
            let res = await axios.get(URL);
            if (res.data.error) {
                window.alert(res.data.error);
            } else {
                return dispatch({
                    type: GET_COUNTRY_DETAIL,
                    payload: res.data,
                });
            }
        } catch (error) {
            window.alert(error.message);
        }
    }
};

export const searchCountry = (input) => {
    const URL = `http://localhost:3001/countries/name?name=${input}`;
    return async (dispatch) => {
        try {
            let res = await axios.get(URL);
            if (res.data.error) {
                window.alert(res.data.error);
            } else {
                return dispatch({
                    type: SEARCH_COUNTRY,
                    payload: res.data,
                });
            }
        } catch (error) {
            window.alert(error.message);
        }
    }
};

export const orderCountries = (order) => {
    return {
        type: ORDER_COUNTRIES,
        payload: order,
    }
};

export const filterCountries = (filter) => {
    return {
        type: FILTER_COUNTRIES,
        payload: filter,
    }
};

export const postActivity = (activity) => {
    const URL = 'http://localhost:3001/activities';
    return async (dispatch) => {
        try {
            let res = await axios.post(URL, activity);
            if (res.data.error) {
                window.alert(res.data.error);
            } else {
                return dispatch({
                    type: POST_ACTIVITY,
                    payload: res.data,
                });
            }
        } catch (error) {
            window.alert(error.message);
        }
    }
};

export const getActivities = () => {
    const URL = 'http://localhost:3001/activities';
    return async (dispatch) => {
        try {
            let res = await axios.get(URL);
            if (res.data.error) {
                window.alert(res.data.error);
            } else {
                return dispatch({
                    type: GET_ACTIVITIES,
                    payload: res.data,
                });
            }
        } catch (error) {
            window.alert(error.message);
        }
    }
};
