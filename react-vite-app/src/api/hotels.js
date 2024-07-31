import { get, getById, getHotelsFilter } from './httpClient.js';

export async function getHotels(signal) {
  return await get('hotels', signal);
}

export async function getHotelById(id, signal) {
  return await getById('hotels', id, signal);
}

export async function getFilterHotels(url, params, signal) {
  return await getHotelsFilter(url, params, signal);
}

