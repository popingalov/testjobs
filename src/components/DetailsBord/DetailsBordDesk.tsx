import React from 'react';

import { ReactComponent as Star } from '../../assets/icons/bookmark.svg';
import { ReactComponent as Shape } from '../../assets/icons/shapeLink.svg';
import { ReactComponent as ShapeMini } from '../../assets/icons/shape.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { takeDifferenceTime } from '../../helperFunc';
import { useNavigate } from 'react-router-dom';
import Mob from 'components/JobText';
import Button from 'components/Button';
import Map from 'components/Map';
import Container from 'components/Container/Container';

type TProps = {
  data: IData;
  starSize: {
    width: string;
    height: string;
  };
};

export default function DetailsBordDesk({ data, starSize }: TProps) {
  const nav = useNavigate();
  const id = React.useId;
  window.scroll(0, 0);

  const el: IData = data
    ? data
    : JSON.parse(localStorage.getItem('details') || 'Люблю ТС');
  return (
    <Container>
      <main className="flex justify-between text-fill">
        <div className="mr-6 w-full max-w-[700px]">
          <div className="mb-6 flex  justify-between border-b border-solid border-fill pb-6 font-bold">
            <p> Job Details</p>
            <div className="flex">
              <p className="sr-only">Manipulation</p>
              <div className="mr-9 flex items-center font-roboto">
                <Star className="mr-3 hover:fill-slate-500" />
                <span>Save to my list</span>
              </div>
              <div className="flex items-center font-roboto">
                <Shape className="mr-3 hover:scale-90" />
                <span>Shape</span>
              </div>
            </div>
          </div>
          <div className="mb-8 inline-block duration-300 hover:scale-125">
            <Button />
          </div>
          <h2 className="mb-[5px] font-bold">{el.title}</h2>
          <div className="justify-content: mb-4 flex items-center justify-between">
            <p className="block max-w-[200px] font-roboto text-filltex">
              {takeDifferenceTime(el.updatedAt)}
            </p>
            <div className="text-end font-roboto">
              <p>Brutto, per year</p>
              <p className="flex-col justify-end font-roboto font-bold">
                &#8364; {el.salary.replace(/k/g, '00')}
              </p>
            </div>
          </div>
          <Mob el={el.description} />
          <div className=" inline-block duration-300 hover:scale-125">
            <Button />
          </div>
          <section className="mt-20 mb-14">
            <h3 className=" mb-2 border-b-2  font-bold ">Attached images</h3>
            <ul className="flex gap-2">
              {el.pictures.map(el => {
                return (
                  <img
                    className="block h-36 w-1/3"
                    src={`${el}?random=${id()}`}
                    alt="foto"
                  />
                );
              })}
            </ul>
          </section>
          <section>
            <h3 className="mb-2 border-b-2 font-bold ">Additional info</h3>
            <p className="mb-2 font-roboto">Employment type</p>
            <ul className="mb-5 flex  flex-wrap gap-2">
              {el.employment_type.map(el => {
                return (
                  <li className="h-[50px] w-[220px] rounded-lg bg-employ px-2  py-4 text-center text-sm font-bold text-empolyText">
                    {el}
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h3 className="mb-2 font-roboto">Benefits</h3>
            <ul className="mb-16 flex flex-wrap gap-2">
              {el.benefits.map(el => {
                return (
                  <li className="h-[50px] w-[220px] rounded-lg bg-benefits px-2  py-4 text-center text-sm font-bold text-benefitsText">
                    {el}
                  </li>
                );
              })}
            </ul>
          </section>
          <button
            onClick={() => {
              nav(-1);
            }}
            className="flex h-[50px] w-[220px] items-center justify-center rounded-lg bg-slate-300 bg-opacity-30 duration-300 hover:scale-125"
          >
            <Arrow className="mr-3 font-semibold text-fill" />
            <div className="font-bold text-fill">Return to job board</div>
          </button>
        </div>
        <address>
          <h3 className="sr-only">Contacts</h3>{' '}
          <div className=" rounded-t-lg bg-[#2A3047] bg-circle bg-no-repeat px-16 pt-8 pb-6 font-roboto  text-[#E7EAF0] opacity-95">
            <p className="mb-4 font-sans font-bold text-white">
              Departament name. <br></br> {el.name}
            </p>
            <div className="mb-2 flex items-start">
              <p className="box-content">
                <ShapeMini className="mr-2 inline-block h-6 w-4 fill-[#D8D8D8]" />
                {el.geoCode}
              </p>
            </div>
            <div>
              <a className="block" href={`tel:${el.phone}`}>
                {el.phone}
              </a>
              <a className="block" href={`mailto:${el.email}`}>
                {el.email}
              </a>
            </div>
          </div>
          <Map data={el} />
        </address>
      </main>
    </Container>
  );
}
