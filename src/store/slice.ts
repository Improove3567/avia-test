import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Ticket = {
    from: string | null,
    where: string | null,
    flyDate: string | null,
    becomeDate: string | null
}

type TicketsState = {
    list: Ticket[];
}
const initialState: Ticket = {
    from: null,
    where: null,
    flyDate: null,
    becomeDate: null
}

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        addTicket(state, action: PayloadAction<Ticket>) {
            state.from = action.payload.from;
            state.where = action.payload.where;
            state.flyDate = action.payload.flyDate;
            state.becomeDate = action.payload.becomeDate;
        }
    }
})

export const { addTicket } = ticketSlice.actions;

export default ticketSlice.reducer;