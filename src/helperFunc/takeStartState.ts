import takeGeocod from './takeGeocod';
import miniApi from '../miniApi';
import devProps from '../help.json';

export default async function startState(page: number = 1) {
  const oldObj = (await miniApi(page)) || devProps;
const geocoder =  new google.maps.Geocoder();
  let newObj = [];
  for (const el of oldObj) {
    const oldObj = el;
    const stringa = await takeGeocod(el.location, geocoder);
    oldObj.geoCode = stringa;
    newObj.push(oldObj);
  }

  return newObj;
}
