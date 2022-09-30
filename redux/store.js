import { configureStore } from '@reduxjs/toolkit'
import citiesApi from './actions/citiesApi'
import usersApi from './actions/usersApi'
export default configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath]: citiesApi.reducer,

        users: usersApi,
        [usersApi.reducerPath]: usersApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    }).concat(citiesApi.middleware)
})