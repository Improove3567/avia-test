import { configureStore } from "@reduxjs/toolkit";
import ticketSlice from './slice'

const store = configureStore({
    reducer: {
        tickets: ticketSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;