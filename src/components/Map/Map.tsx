import { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import myIcon from '../../assets/icons/shape.svg';
import styles from './style.json';

const containerStyle = {
  width: '100%',
  height: '430px',
};
const googleKey = process.env.REACT_APP_GOOGLEKEY || 's';
interface IMap {
  data: IData;
}
export default function Home({ data }: IMap) {
  console.log(data);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleKey,
  });
  if (!isLoaded) return <div>Крутий спінер, вжух</div>;

  return <Map data={data} />;
}

function Map({ data }: IMap) {
  const [triger, setTriger] = useState(false);

  const center = useMemo(() => {
    const normLoc = { lat: data.location.lat, lng: data.location.long };
    // знову десь в тихому океані
    return { lat: 50.473269654751675, lng: 30.466887628201324 };
  }, []);

  setTimeout(() => {
    setTriger(true);
  }, 1);

  return (
    <>
      <GoogleMap
        // mapTypeId="356f4596ed668d0"
        options={styles}
        mapContainerStyle={containerStyle}
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        {triger && <Marker icon={myIcon} position={center} />}
      </GoogleMap>
    </>
  );
}
