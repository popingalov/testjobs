import s from './Pagination.module.css';
import { NavLink } from 'react-router-dom';
interface INumber {
  number: number;
  triger: boolean;
  handler: (e: React.MouseEvent<HTMLElement>) => void;
  location: any;
}
export default function Number({ number, triger, handler, location }: INumber) {
  // const location = useLocation();

  return (
    <NavLink
      to={`${location.state}/${number}`}
      state={location.state}
      onClick={handler}
      className={!triger ? s.a : s.aFocus}
    >
      {number}
    </NavLink>
  );
}
