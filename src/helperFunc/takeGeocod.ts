export default async function takeGeocod(
  obj: { lat: number; long: number } | string,
  geocoder: google.maps.Geocoder = new google.maps.Geocoder(),
)  {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  try {
    let helper;

    if (typeof obj !== 'string') {
      const normalize = { lat: obj.lat, lng: obj.long };
      helper = await geocoder.geocode({
        location: normalize,
      });
    } else {
      helper = await geocoder.geocode({
        address: obj,
      });
    }

    const adres = helper.results[3].address_components;
    const result = `${adres[1].long_name}, ${adres[3].long_name}`;
    return result;
  } catch (error) {
    //десь в океан полетіли
    return 'Мангеттен, Нью-Йорк Каунти';
  }
}
