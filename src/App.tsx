import { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLoadScript } from '@react-google-maps/api';
import HomePage from './pages/JobBoard';
import takeData from './helperFunc/takeStartState';
import useApiControl from 'hooks/useApiControl';
//
import useResize from './hooks/useResize';
const googleKey = process.env.REACT_APP_GOOGLEKEY || 's';
//

const DetailsBord = lazy(() => import('pages/DetailsBord'));

function App() {
  const [details, setDetais] = useState<IData | null>(null);
  const { data, setPage } = useApiControl();

  const starSize = useResize();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleKey,
  });

  useEffect(() => {
    if (!data) {
      takeData(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function upArray(idx: number) {
    if (data) setDetais(data[idx]);
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
                  loadData={setPage}
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
