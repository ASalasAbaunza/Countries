import { 
    GET_ACTIVITIES, 
    GET_COUNTRIES, 
    GET_COUNTRY_DETAIL, 
    POST_ACTIVITY, 
    ORDER_COUNTRIES, 
    FILTER_COUNTRIES, 
    SEARCH_COUNTRY, 
} from './actionTypes';

const initialState = {
    countries: [],
    filteredCountries: [],
    countryDetail: {},
    allActivities: [],
    newActivity: {},
};

const rootReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
            };

        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: payload,
            };

        case SEARCH_COUNTRY:
            return {
                ...state,
                countries: payload,
            };

        case ORDER_COUNTRIES:
            if (payload === 'Name') {
                return {
                    ...state,
                    countries: state.countries.sort((a,b) => {
                        a.name - b.name
                    }),
                };
            } else if (payload === 'Population') {
                return {
                    ...state,
                    countries: state.countries.sort((a,b) => {
                        a.population - b.population
                    }),
                };
            } else {
                return {...state};
            }

        case FILTER_COUNTRIES:
            if (payload === 'All') {
                return {
                    ...state,
                    filteredCountries: state.countries,
                }
            } else {
                switch (payload) {
                    case 'North America':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                country.continent === payload;
                            }),
                        };

                    case 'South America':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                country.continent === payload;
                            }),
                        };

                    case 'Europe':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                country.continent === payload;
                            }),
                        };

                    case 'Asia':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                country.continent === payload;
                            }),
                        };

                    case 'Africa':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                country.continent === payload;
                            }),
                        };

                    case 'Oceania':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                country.continent === payload;
                            }),
                        };
                        
                    case 'Antarctica':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                country.continent === payload;
                            }),
                        };

                    case 'Spring':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                return country.Activities.some((activity) => {
                                    return activity.season === payload;
                                });
                            }),
                        };

                    case 'Summer':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                return country.Activities.some((activity) => {
                                    return activity.season === payload;
                                });
                            }),
                        };

                    case 'Fall':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                return country.Activities.some((activity) => {
                                    return activity.season === payload;
                                });
                            }),
                        };

                    case 'Winter':
                        return {
                            ...state,
                            filteredCountries: state.countries.filter((country) => {
                                return country.Activities.some((activity) => {
                                    return activity.season === payload;
                                });
                            }),
                        };
                
                    default:
                        return {...state};
                }
            }

        case POST_ACTIVITY:
            return {
                ...state,
                newActivity: payload,
            };

        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: payload,
            };

        default:
            return {...state};
    }
};

export default rootReducer;