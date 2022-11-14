import { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import myIcon from '../../assets/icons/shape.svg';
import styles from './style.json';
const containerStyle = {
  width: '100%',
  height: '220px',
  'border-bottom-left-radius': ' 0.5rem',
  'border-bottom-right-radius': ' 0.5rem',
};
const googleKey = process.env.REACT_APP_GOOGLEKEY || 's';
interface IMap {
  data: IData;
}
export default function Home({ data }: IMap) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleKey,
  });
  if (!isLoaded) return <div>Крутий спінер, вжух</div>;

  return <Map data={data} />;
}

function Map({ data }: IMap) {
  const [triger, setTriger] = useState(false);

  const center = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const normLoc = { lat: data.location.lat, lng: data.location.long };
    // знову десь в тихому океані
    return { lat: 50.473269654751675, lng: 30.466887628201324 };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  setTimeout(() => {
    setTriger(true);
  }, 1);

  return (
    <GoogleMap
      // mapTypeId="356f4596ed668d0"
      options={styles}
      mapContainerStyle={containerStyle}
      zoom={15}
      center={center}
      mapContainerClassName="map-container"
    >
      <div className="pointer-events-none absolute h-[100%] w-[100%] bg-[#2A3047]  opacity-30"></div>
      {triger && <Marker icon={myIcon} position={center} />}
    </GoogleMap>
  );
}
