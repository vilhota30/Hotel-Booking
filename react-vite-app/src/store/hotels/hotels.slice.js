import { createSlice } from '@reduxjs/toolkit';
import { FETCH_HOTELS_FAILED, FETCH_HOTELS_SUCCESS, FETCH_HOTEL_BY_ID_SUCCESS, FETCH_HOTEL_BY_ID_FAILURE, FILTER_HOTELS_FAILED, FILTER_HOTELS_SUCCESS } from './hotels.actions.js';

const initialState = {
  hotels: [],
  filteredHotels: [],
  hotel: null,
  status: null,
  error: null,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    clearHotels(state) {
      state.hotels = [];
      state.status = null;
      state.error = null;
    },
  },
  selectors: {
    selectHotels: (state) => state.hotels,
    selectHotelsStatus: (state) => state.status,
    selectHotel: (state) => state.hotel,
    selectHotelStatus: (state) => state.status,
    selectFilteredHotels: (state) => state.filteredHotels,
  },
  extraReducers: (builder) => {
    builder.addCase(FETCH_HOTELS_SUCCESS, (state, { payload }) => {
      state.hotels = payload;
      state.status = 'success';
    });
    builder.addCase(FETCH_HOTELS_FAILED, (state, { payload }) => {
      state.error = payload;
      state.status = 'failed';
    });
    builder.addCase(FILTER_HOTELS_SUCCESS, (state, { payload }) => {
      state.filteredHotels = payload;
      state.status = 'success';
    })
    builder.addCase(FILTER_HOTELS_FAILED, (state, { payload }) => {
      state.error = payload;
      state.status = 'failed';
    })
    builder.addCase(FETCH_HOTEL_BY_ID_SUCCESS, (state, {payload}) => {
      state.hotel = payload;
      state.status = 'success';
    });
    builder.addCase(FETCH_HOTEL_BY_ID_FAILURE, (state, {payload}) => {
      state.error = payload;
      state.status = 'failed';
    });
  },
});

export const { clearHotels } = hotelsSlice.actions;
export const { selectHotels, selectHotelsStatus, selectHotel, selectHotelStatus } = hotelsSlice.selectors;
export const hotelsReducer = hotelsSlice.reducer;
