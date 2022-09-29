import { configureStore } from '@reduxjs/toolkit'
import citiesApi from './actions/citiesApi'

export default configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath]: citiesApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    }).concat(citiesApi.middleware)
})