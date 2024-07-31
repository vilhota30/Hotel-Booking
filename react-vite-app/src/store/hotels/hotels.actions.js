import { createAction } from '@reduxjs/toolkit';

export const FETCH_HOTELS_ACTION = createAction('users/fetchUsers');
export const FETCH_HOTELS_SUCCESS = createAction('users/fetchUsers/success');
export const FETCH_HOTELS_FAILED = createAction('users/fetchUsers/failed');

export const FETCH_HOTEL_BY_ID_REQUEST = createAction('users/fetchHotelById');
export const FETCH_HOTEL_BY_ID_SUCCESS = createAction('users/fetchHotelById/success');
export const FETCH_HOTEL_BY_ID_FAILURE = createAction('users/fetchHotelById/failed');

export const FILTER_HOTELS_ACTION = createAction('hotels/filterHotels');
export const FILTER_HOTELS_SUCCESS = createAction('hotels/filterHotels/success');
export const FILTER_HOTELS_FAILED = createAction('hotels/filterHotels/failed');

