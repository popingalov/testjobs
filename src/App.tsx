
import { useState, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/JobBoard';
import useApiControl from 'hooks/useApiControl';
//
import useResize from './hooks/useResize';
import Load from 'components/Load';
//

const DetailsBord = lazy(() => import('pages/DetailsBord'));

function App() {
  const [details, setDetais] = useState<IData | null>(null);

  const { data, setPage } = useApiControl();

  const starSize = useResize();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  function upArray(idx: number) {
    if (data) setDetais(data[idx]);
  }

  return (
    <>
      {!data ? (
        <Load />
      ) : (
        <Suspense fallback={<Load />}>
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
