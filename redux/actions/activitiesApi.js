import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

//CreateApi es solo una configuracion
const ActivitiesApi = createApi({
    //Este es el nombre q le ponemos
    reducerPath: "ActivitiesApi",

    //url
    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-back-salas-medici.herokuapp.com",
    }),

    //Aca vamos a definir todos los endpoints
    endpoints: (builder) => ({
        getAllIActivities: builder.query({
            query: (id) => `activities?itinerary=${id}`,

        }),



    })


})

export default ActivitiesApi
export const { useGetAllIActivitiesQuery } = ActivitiesApi