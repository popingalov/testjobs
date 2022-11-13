interface IData {
  address: string;
  benefits: string[];
  createdAt: string;
  description: string;
  email: string;
  employment_type: string[];
  id: string;
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
  loadData?: (e: number) => void;
  upArray?: (idx:number)=>void
};