import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.mjs';
import characterReducer from './characterSlice.mjs';

const store = configureStore({

    reducer: {

        user: userReducer,
        
        character: characterReducer,

    },

});

export default store;