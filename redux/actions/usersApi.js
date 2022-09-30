import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const usersApi = createApi({
    reducerPath: "usersApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-back-salas-medici.herokuapp.com",
    }),

    endpoints: (builder) => ({
        userSignUp: builder.mutation({
            query: (user) => ({
                url: "/users/signup",
                method: "POST",
                body: user
            }),
        }),

        getOneUser: builder.query({
            query: (id) => `/users/${id}`,
            transformResponse: res => res.response
        }),

        userSignIn: builder.mutation({
            query: (user) => ({
                url: "/users/signin",
                method: "POST",
                body: user
            }),
        }),

        userSignOut: builder.mutation({
            query: (user) => ({
                url: "/users/signout",
                method: "POST",
                body: user
            })
        }),

        getAllUsers: builder.query({
            query: (search) => `/users/?user=${search}`,
            transformResponse: res => res.response
        })
    })
})


export default usersApi
export const { useUserSignUpMutation, useUserSignInMutation, useUserSignOutMutation, useGetOneUserQuery, useGetAllUsersQuery} = usersApi
