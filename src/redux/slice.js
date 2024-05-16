import { createSlice } from "@reduxjs/toolkit";

const intial = {
    userState: []
}

const firstSlice = createSlice({
    name: 'firstname',
    initialState: intial,
    reducers: {
        addUsers: (state, action) => {
            state.userState = [...state.userState, action.payload]
        }
    }
})

export const { addUsers } = firstSlice.actions
export default firstSlice.reducer