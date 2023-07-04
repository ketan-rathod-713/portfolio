import { createSlice } from "@reduxjs/toolkit"
import { DARK, LIGHT } from './../../app/constants';

const initialState = {
    mode: "light",
    primaryColor: "blue",
    secondaryColor: "red"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setMode: (state, action)=>{
            if(state.mode === LIGHT){
                state.mode = DARK;
            } else if(state.mode === DARK){
                state.mode = LIGHT;
            }

            console.log("action called with", state, action);
            
        }
    }
})

export const {setMode} = themeSlice.actions;
export const selectMode = (state) => state.theme.mode;


export default themeSlice.reducer;