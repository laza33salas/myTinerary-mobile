import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
   reducer:{
    cities: citiesApi,
    [citiesApi.reducerPath]:citiesApi.reducer
   },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        inmutableCheck:false,
        serializableCheck: false,
    })
})