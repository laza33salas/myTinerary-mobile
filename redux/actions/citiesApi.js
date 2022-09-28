import {creteApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const citiesApi = creteApi({
    reducerPath: 'citiesApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/'
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