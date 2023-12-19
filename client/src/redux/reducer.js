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
    allCountries: [],
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
                allCountries: payload,
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
                allCountries: payload,
            };

        case ORDER_COUNTRIES:    
            if (payload === 'Name') {
                const sortedByName = [...state.countries].sort((a, b) => a.name.localeCompare(b.name));
                return {
                    ...state,
                    countries: sortedByName,
                };
            } else if (payload === 'Population') {
                const sortedByPopulation = [...state.countries].sort((a, b) => a.population - b.population);
                return {
                    ...state,
                    countries: sortedByPopulation,
                };
            } else {
                return {...state};
            };

        case FILTER_COUNTRIES:
            if (payload === 'All') {
                return {
                    ...state,
                    countries: state.allCountries,
                }
            } else {
                switch (payload) {
                    case 'North America':
                        let filterNA = [...state.allCountries].filter((country) => country.continent === payload);
                        return {
                            ...state,
                            countries: filterNA,
                        };

                    case 'South America':
                        let filterSA = [...state.allCountries].filter((country) => country.continent === payload);
                        return {
                            ...state,
                            countries: filterSA,
                        };

                    case 'Europe':
                        let filterE = [...state.allCountries].filter((country) => country.continent === payload);
                        return {
                            ...state,
                            countries: filterE,
                        };

                    case 'Asia':
                        let filterAsia = [...state.allCountries].filter((country) => country.continent === payload);
                        return {
                            ...state,
                            countries: filterAsia,
                        };

                    case 'Africa':
                        let filterAfrica = [...state.allCountries].filter((country) => country.continent === payload);
                        return {
                            ...state,
                            countries: filterAfrica,
                        };

                    case 'Oceania':
                        let filterO = [...state.allCountries].filter((country) => country.continent === payload);
                        return {
                            ...state,
                            countries: filterO,
                        };
                        
                    case 'Antarctica':
                        let filterAn = [...state.allCountries].filter((country) => country.continent === payload);
                        return {
                            ...state,
                            countries: filterAn,
                        };

                    case 'Spring':
                        let filterSpring = [...state.allCountries].filter((country) => {
                            return country.Activities.some((activity) => {
                                return activity.season === payload;
                            });
                        });
                        return {
                            ...state,
                            countries: filterSpring,
                        };

                    case 'Summer':
                        let filterSummer = [...state.allCountries].filter((country) => {
                            return country.Activities.some((activity) => {
                                return activity.season === payload;
                            });
                        });
                        return {
                            ...state,
                            countries: filterSummer,
                        };

                    case 'Fall':
                        let filterF = [...state.allCountries].filter((country) => {
                            return country.Activities.some((activity) => {
                                return activity.season === payload;
                            });
                        });
                        return {
                            ...state,
                            countries: filterF,
                        };

                    case 'Winter':
                        let filterW = [...state.allCountries].filter((country) => {
                            return country.Activities.some((activity) => {
                                return activity.season === payload;
                            });
                        });
                        return {
                            ...state,
                            countries: filterW,
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