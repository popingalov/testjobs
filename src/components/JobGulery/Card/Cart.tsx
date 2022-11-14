import React, { FC } from 'react';
import { takeDifferenceTime } from '../../../helperFunc';
import { ReactComponent as Star } from '../../../assets/icons/star.svg';
import { ReactComponent as Location } from '../../../assets/icons/location.svg';
import { ReactComponent as Bookmark } from '../../../assets/icons/bookmark.svg';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import s from '../JobGulery.module.css';

const Cart: FC<TDataSize> = ({ apiData, starSize, upArray }) => {
  const id = React.useId;
  const navigate = useNavigate();

  function takeStarRating(): JSX.Element[] {
    const result = [];
    const random = Math.floor(Math.random() * 5 + 1);
    for (let index = 0; index < random; index++) {
      result.push([index]);
    }
    return result.map(el => {
      return (
        <li key={v4()}>
          <Star style={starSize} />
        </li>
      );
    });
  }

  function goTo(id: string, idx: number) {
    const arr = JSON.stringify(apiData[idx]);
    localStorage.setItem('details', arr);
    if (upArray) {
      upArray(idx);
    }
    navigate(`/details/${id}`);
  }

  return (
    <>
      {apiData?.map((el, idx) => {
        return (
          <li
            key={id()}
            className="mb-2 flex w-full max-w-[400px] rounded-lg border-2 px-3 pt-3 pb-7 text-[#878D9D] 
                last:mb-0 xl:w-[1400px] xl:max-w-[100vw]  "
          >
            <img
              className={s.img}
              loading="lazy"
              src={`${el.pictures[0]}?random=${id()}`}
              alt="foto"
            />
            <div className="xl:flex xl:w-full xl:flex-row-reverse xl:items-end  xl:justify-between">
              <div className=" mb-3 flex justify-between xl:mb-0  xl:h-[calc(100%-20px)] xl:w-full xl:max-w-xs xl:items-center">
                <ul className="mr-24 flex">{takeStarRating()}</ul>
                <p
                  className="text-left text-xs font-light 
                       xl:flex xl:h-full xl:flex-col xl:content-between xl:items-end xl:justify-between "
                >
                  <Bookmark className="hidden hover:fill-slate-500 xl:block" />
                  {takeDifferenceTime(el.updatedAt)}
                </p>
              </div>
              <div>
                <div
                  onClick={() => goTo(el.id, idx)}
                  className="xl:bloc cursor-pointer xl:max-w-[700px]"
                >
                  <p className="text-bol  mb-1 font-bold text-fill opacity-90">
                    {el.title}
                  </p>
                  <p className="mb-1">Departament name • {el.name}</p>
                  <p className="flex items-center">
                    <Location className="mr-2 inline-block" />
                    <span>{el.geoCode}</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Cart;
