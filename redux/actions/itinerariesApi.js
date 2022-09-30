import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const itiApi = createApi({

    reducerPath: "itiApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-back-salas-medici.herokuapp.com"
    }),

    endpoints: (builder) => ({
        getItineraries: builder.query({
            query: (id) => `itineraries/?city=${id}`,
            transformResponse: res => res.response

        }),

        //llamar en mytitneraries
        getUsersItineraries: builder.query({

            query: (id) => `itineraries/?user=${id ? id : "Daleapruebaaa"}`,
            transformResponse: res => res.response
        }),

        deleteItinerary: builder.mutation({
            query: (id) => ({
                url: `/itineraries/${id}`,
                method: 'DELETE',
            })
        }),

        likeDislike: builder.mutation({
            query: (id) => ({
                url: '/itineraries/like/' + id,
                method: 'PUT',
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        }),
    }),



})

export default itiApi
export const { useGetItinerariesQuery, useGetUsersItinerariesQuery, useDeleteItineraryMutation, useLikeDislikeMutation } = itiApi