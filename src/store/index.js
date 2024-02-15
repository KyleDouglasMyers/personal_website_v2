import { configureStore } from "@reduxjs/toolkit";
import { navReducer, changeSection, handleModal } from "./slices/navSlice";

const store = configureStore({
    reducer: {
        nav: navReducer,
    }
});

export {store, changeSection, handleModal};
