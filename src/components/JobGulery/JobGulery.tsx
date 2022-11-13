import React, { FC } from 'react';
import s from './JobGulery.module.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { v4 } from 'uuid';
import { takeDifferenceTime } from '../../helperFunc';

const JobGulery: FC<TDataSize> = ({ apiData, starSize, upArray }) => {
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
    <main className={s.JobGulery}>
      <section>
        <h1 className="sr-only">Job board</h1>
        <ul>
          {apiData?.map((el, idx) => {
            return (
              <li
                onClick={() => goTo(el.id, idx)}
                key={id()}
                className=" mb-2 flex max-w-[400px] rounded-lg border-2 px-3 pt-3 pb-7 text-[#878D9D] last:mb-0  "
              >
                <img
                  className={s.img}
                  loading="lazy"
                  src={`${el.pictures[0]}?random=${id()}`}
                  alt="foto"
                />
                <div>
                  <div className="mb-3 flex justify-between">
                    <ul className="mr-24 flex">{takeStarRating()}</ul>
                    <p className="text-left text-xs font-light">
                      {takeDifferenceTime(el.updatedAt)}
                    </p>
                  </div>
                  <div>
                    <div>
                      <p className="mb-1  text-base font-normal text-fill">
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
        </ul>
      </section>
    </main>
  );
};

export default JobGulery;
