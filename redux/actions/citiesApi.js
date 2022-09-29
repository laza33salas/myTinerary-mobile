import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

//CreateApi es solo una configuracion
const citiesApi = createApi({
    //Este es el nombre q le ponemos
    reducerPath: "citiesApi",

    //url
    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-back-salas-medici.herokuapp.com",
    }),

    //Aca vamos a definir todos los endpoints
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (search) => `/cities/?city=${search}`,

        }),



        getOneCity: builder.query({
            query: (id) => `/cities/${id}`,
            transformResponse: res => res.response
        }),

    })


})

export default citiesApi
export const { useGetAllCitiesQuery, useGetOneCityQuery } = citiesApi