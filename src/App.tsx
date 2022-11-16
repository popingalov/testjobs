import { useEffect, useState, Suspense, lazy } from 'react';
import miniApi from './miniApi';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLoadScript } from '@react-google-maps/api';
import HomePage from './pages/JobBoard';
//
import useResize from './hooks/useResize';
import devProps from './help.json';
const googleKey = process.env.REACT_APP_GOOGLEKEY || 's';
//

const DetailsBord = lazy(() => import('pages/DetailsBord'));

function App() {
  const [data, setData] = useState<IData[] | any>();
  const [details, setDetais] = useState<IData | null>(null);
  const starSize = useResize();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleKey,
  });

  async function startState(page: number = 1) {
    const oldObj = (await miniApi(page)) || devProps;

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
