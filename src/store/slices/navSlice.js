import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
    name: 'nav',
    initialState: { //inidial state for the slice
        currentSection: '',
        modalState: false
    },
    reducers: {
        changeSection(state, action) {
            console.log('Action Payload in changePage:');
            console.log(action.payload);
            state.currentSection = action.payload; //state that only this slice controls
        },
        handleModal(state,action) {
            console.log('Modal toggle');
            state.modalState = !state.modalState;
        }
    },
});

export const {changeSection, handleModal} = navSlice.actions;
export const navReducer = navSlice.reducer; //this reducer is the large reducer full of the mini reducers