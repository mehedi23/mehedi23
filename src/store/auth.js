import axios from 'axios';
import {log_in_api} from './api_url'
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    auth_verify : false,
    auth_token : ''
}

export const log_in = createAsyncThunk(
    'auth/log_in',

    async ( data , {dispatch} ) => {
        
        try {
            
            const user = await axios ({
                method : "post" ,
                url : log_in_api,
                data : data
            });

            console.log(user)
    
            var date = new Date();
            var hour = date.getHours();
            date.setHours(hour+2+6);
    
            document.cookie = `token=${user.data}; expires=${date.toGMTString()}; path=/`;
    
            dispatch(author(true));
            dispatch(token_store(user.data));
            console.log(user)

            return true;
        } catch {
            dispatch(author(false));
            dispatch(token_store(''));
            return false;
        };
    }
)

export const auth_Slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        author: ( state , action ) => {
            state.auth_verify = action.payload;
        },
        token_store: (state , action) =>{
            state.auth_token = action.payload;
        }
    }
})


export const { author , token_store } = auth_Slice.actions ;

export default auth_Slice.reducer ;