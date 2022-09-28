import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const citiesApi = createApi({
    reducerPath: 'citiesApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://my-tinerary-back-salas-medici.herokuapp.com'
    }),
    
    endpoints: (builder) =>({
        getAllCities: builder.query({
            query: (search) => `/cities/?city=${search}`,
            transformResponse: res => res.response
        }),

        getOneCity: builder.query({
            query: (id)=>`/cities/${id}`,
            transformResponse: res => res.response
        }),

        })
})

export default citiesApi
export const {useGetAllCitiesQuery, useGetOneCityQuery} = citiesApi