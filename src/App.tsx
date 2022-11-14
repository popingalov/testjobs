import React, { useEffect, useState, Suspense } from 'react';
import miniApi from './miniApi';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLoadScript } from '@react-google-maps/api';
import HomePage from './pages/JobBoard';
import useResize from './hooks/useResize';
import DetailsBord from 'pages/DetailsBord';
// import devProps from './help.json';
// import Map from 'components/Map';
function App() {
  const [data, setData] = useState<IData[] | any>();
  const [details, setDetais] = useState<IData | null>(null);
  const starSize = useResize();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyADV0BWsVdtInBGNDQiYbm9hzbLvKLgik4',
  });

  async function startState(page: number = 1) {
    const oldObj = await miniApi(page);
    let newObj = [];
    let limitText = 'Мангеттен, Нью-Йорк Каунти';
    const limit = 1;
    let test = 0;
    const helper = oldObj;
    for (const el of helper) {
      if (test < limit) {
        const helper = el;
        const stringa = await takeGeocod(el.location);
        helper.geoCode = stringa;
        newObj.push(helper);
        test += 1;
      } else {
        const helper = el;
        helper.geoCode = limitText;
        newObj.push(helper);
      }
    }

    setData(oldObj);
  }

  async function takeGeocod(obj: { lat: number; long: number }) {
    const normalize = { lat: obj.lat, lng: obj.long };
    const geocoder = new google.maps.Geocoder();
    // по координатам з беку нічого не знаходить
    let helper = await geocoder.geocode({
      location: { lat: 40.731, lng: -73.997 },
    });

    const adres = helper.results[3].address_components;
    const result = `${adres[1].long_name}, ${adres[3].long_name}`;

    return result;
  }

  useEffect(() => {
    startState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function upArray(idx: number) {
    setDetais(data[idx]);
  }

  return (
    <>
      {!data ? (
        <div>Я спінер</div>
      ) : (
        <Suspense fallback={<div>Я спінер</div>}>
          <Routes>
            <Route path="/" element={<Navigate state="/page" to="/page/1" />} />
            <Route
              path="/page/:pageNumber/*"
              element={
                <HomePage
                  upArray={upArray}
                  loadData={startState}
                  apiData={data}
                  starSize={starSize}
                />
              }
            />
            <Route path="/*" element={<h1>Не ламай мені сайт!</h1>} />
            <Route
              path="/details/:id/*"
              element={
                <DetailsBord
                  starSize={starSize}
                  data={details ? details : data[0]}
                />
              }
            />
            <Route path="/*" element={<h1>Не ламай мені сайт!</h1>} />
          </Routes>
        </Suspense>
      )}
    </>
  );
}

export default App;
