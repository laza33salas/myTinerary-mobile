import { configureStore } from '@reduxjs/toolkit'
import citiesApi from './actions/citiesApi'
import usersApi from './actions/usersApi'
import itiApi from "./actions/itinerariesApi";
import activitiesApi from './actions/activitiesApi'
export default configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath]: citiesApi.reducer,

        users: usersApi,
        [usersApi.reducerPath]: usersApi.reducer,

        itineraries: itiApi,
        [itiApi.reducerPath]: itiApi.reducer,

        activities: activitiesApi,
        [activitiesApi.reducerPath]: activitiesApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    }).concat(activitiesApi.middleware, citiesApi.middleware, itiApi.middleware, usersApi.middleware)
})