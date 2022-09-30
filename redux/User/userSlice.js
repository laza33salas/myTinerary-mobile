import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: {}
    },

    reducers: {
        getUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer
export const { getUser } = userSlice.actions