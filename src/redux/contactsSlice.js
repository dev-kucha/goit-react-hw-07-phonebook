import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '+38044-459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '+38055-443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '+38066-645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '+38077-227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    // Код остальных редюсеров
  },
});

export const { addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;