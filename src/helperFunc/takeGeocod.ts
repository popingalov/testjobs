export default async function takeGeocod(obj: { lat: number; long: number }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
try {
      const normalize = { lat: obj.lat, lng: obj.long };
    const geocoder = new google.maps.Geocoder();
    let helper = await geocoder.geocode({
      location: normalize,
    });
    const adres = helper.results[3].address_components;
    const result = `${adres[1].long_name}, ${adres[3].long_name}`;
    return result;
} catch (error) {
  //десь в океан полетіли
  return null
}
  }