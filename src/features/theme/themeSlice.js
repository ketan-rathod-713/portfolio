import { createSlice } from "@reduxjs/toolkit"
import { DARK, LIGHT, LIGHT_THEME_ClASSES } from './../../app/constants';



const initialState = {
    mode: "light",
    colors: LIGHT_THEME_ClASSES
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
                state.colors = LIGHT_THEME_ClASSES;
            }

            console.log("action called with", state, action);
            
        }
    }
})

export const {setMode} = themeSlice.actions;
export const selectMode = (state) => state.theme.mode;
export const selectColors = (state) => state.theme.colors;


export default themeSlice.reducer;