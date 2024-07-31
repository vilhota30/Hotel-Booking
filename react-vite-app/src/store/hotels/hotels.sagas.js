import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_HOTELS_ACTION, FETCH_HOTELS_SUCCESS, FETCH_HOTELS_FAILED, FETCH_HOTEL_BY_ID_REQUEST, FETCH_HOTEL_BY_ID_SUCCESS, FETCH_HOTEL_BY_ID_FAILURE, FILTER_HOTELS_ACTION, FILTER_HOTELS_SUCCESS, FILTER_HOTELS_FAILED } from './hotels.actions.js';
import { getHotels, getHotelById, getFilterHotels } from '../../api';

export function* fetchHotelsSaga({ payload }) {
  try {
    const data = yield call(getHotels, payload);
    const preparedData = data.map((el) => ({
      ...el,
      phone: el.phone_number,
    }));
    yield put(FETCH_HOTELS_SUCCESS(preparedData));
  } catch (error) {
    yield put(FETCH_HOTELS_FAILED(error.message));
  }
};

function* fetchHotelByIdSaga(action) {
  try {
    const response = yield call(getHotelById, action.payload.id);
    yield put({ type: FETCH_HOTEL_BY_ID_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: FETCH_HOTEL_BY_ID_FAILURE, payload: error.message });
  }
};

function* fetchFilterHotelsSaga(action) {
  const { payload } = action;
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    console.log('Filtering hotels with payload:', payload.city);
    // Формування параметрів для запиту
    const params = new URLSearchParams(payload.city).toString(); //рядок запиту

    console.log('This is my params:', params);
    const data = yield call(getHotelsFilter, `/hotels?${params}`, null, signal);
    
    const preparedData = data.map((el) => ({
      ...el,
      phone: el.phone_number,
    }));
    yield put(FILTER_HOTELS_SUCCESS(preparedData));
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request was aborted');
    } else {
      yield put(FILTER_HOTELS_FAILED(error.message));
    }
  } finally {
    controller.abort(); // Скасування запиту
  }
}

export function* watchFetchHotelsSagas() {
  yield takeLatest(FETCH_HOTELS_ACTION.type, fetchHotelsSaga);
  yield takeLatest(FETCH_HOTEL_BY_ID_REQUEST.type, fetchHotelByIdSaga);
  yield takeLatest(FETCH_HOTELS_ACTION.type, fetchFilterHotelsSaga)
}
