import takeGeocod from './takeGeocod';
import miniApi from '../miniApi';
import devProps from '../help.json';

export default async function startState(page: number = 1) {
    const oldObj = (await miniApi(page)) || devProps;

    let newObj = [];
    let limitText = 'Мангеттен, Нью-Йорк Каунти';

    const limit = 5;
    let test = 0;
      for (const el of oldObj) {
      if (test < limit) {
        const oldObj = el;
        const stringa = await takeGeocod(el.location) || limitText
        oldObj.geoCode = stringa;
        newObj.push(oldObj);
        
        test += 1;
      } else {
        const oldObj = el;
        oldObj.geoCode = limitText;
        newObj.push(oldObj);
      }
    }
return oldObj
  }