import { configureStore } from '@reduxjs/toolkit'
import citiesApi from './actions/citiesApi'
import usersApi from './actions/usersApi'
import itiApi from "./actions/itinerariesApi";
export default configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath]: citiesApi.reducer,

        users: usersApi,
        [usersApi.reducerPath]: usersApi.reducer,

        itineraries: itiApi,
        [itiApi.reducerPath]: itiApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    }).concat(citiesApi.middleware, itiApi.middleware, usersApi.middleware)
})