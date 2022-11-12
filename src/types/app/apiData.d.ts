interface IData {
  address: String;
  benefits: String[];
  createdAt: string;
  description: String;
  email: String;
  employment_type: String[];
  id: String;
  location: { lat: number; long: number };
  name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  updatedAt: string;
  geoCode: string
}
interface TDataSize {
  apiData: IData[];
  starSize: { width: string; height: string };
loadData?:(e:number)=>void
};