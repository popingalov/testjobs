import { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import myIcon from '../../assets/icons/shape.svg';
import styles from './style.json';

const containerStyle = {
  width: '100%',
  height: '200px',
};

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyADV0BWsVdtInBGNDQiYbm9hzbLvKLgik4',
  });
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

function Map() {
  const [triger, setTriger] = useState(false);

  const center = useMemo(() => {
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
