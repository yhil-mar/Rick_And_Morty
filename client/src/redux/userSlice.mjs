import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    jwt: "",
};

export const userSlice = createSlice({

    name: "user",

    initialState: initialState,

    reducers: {

        addUser: (state, action) => {
            const { email, username, firstName, lastName, jwt } = action.payload;
            state.email = email;
            state.username = username;
            state.firstName = firstName;
            state.lastName = lastName;
            state.jwt = jwt;
        },

    },

});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;