import {configureStore} from "@reduxjs/toolkit"
import projetSlice from "../features/projet";

const store = configureStore({
     reducer:{
          projet:projetSlice.reducer
     }
})

export default store;

