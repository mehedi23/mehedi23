import axios from 'axios';
import {testimonial_api_url , testimonial_post_api_url , testimonial_delete_api_url , testimonial_patch_api_url} from './api_url';
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    testimonial_data : ''
}

// get data
export const testimonial_get_data = createAsyncThunk(
    'testimonial/testimonial get data',

    async ( data , {dispatch} ) => {
        try {
            const testimonial__data = await axios ({
                method : "get" ,
                url : testimonial_api_url,
                params : data
            });

            dispatch(testimonial_all_data(testimonial__data.data))
        } catch {
            dispatch(testimonial_all_data(''))
        };
    }
);

export const testimonial_post_data = createAsyncThunk(
    'testimonial/testimonial get data',

    async ( data ) => {
        try {
            const testimonial_post_data = await axios ({
                method : "post" ,
                url : testimonial_post_api_url,
                data : data
            });

            console.log(testimonial_post_data)
            
        } catch {
            console.log("some thing is wrong")
        };
    }
);


export const testimonial_delete_data = createAsyncThunk(
    'testimonial/testimonial delete data',

    async ( id ) => {
        try {
            await axios ({
                method : "delete" ,
                url : testimonial_delete_api_url+id
            });

            console.log("delete successfully")
            
        } catch {
            console.log("some thing is wrong")
        };
    }
);


export const testimonial_edit_data = createAsyncThunk(
    'testimonial/testimonial delete data',

    async ( resutl ) => {
        try {
            await axios ({
                method : "patch" ,
                url : testimonial_patch_api_url+resutl.patch_id,
                data : resutl.post_data
            });

            console.log("edit successfully")
            
        } catch {
            console.log("some thing is wrong")
        };
    }
);







// slice
export const testimonial_Slice = createSlice({
    name: 'testimonial data',
    initialState,
    reducers: {
        testimonial_all_data: ( state , action ) => {
            state.testimonial_data = action.payload;
        }
    }
});


export const { testimonial_all_data } = testimonial_Slice.actions ;

export default testimonial_Slice.reducer ;