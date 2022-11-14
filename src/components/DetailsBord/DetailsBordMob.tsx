import { ReactComponent as Star } from '../../assets/icons/starDetails.svg';
import { ReactComponent as Shape } from '../../assets/icons/shapeLink.svg';
import { ReactComponent as ShapeMini } from '../../assets/icons/shape.svg';
import { takeDifferenceTime } from '../../helperFunc';
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

export default function DetailsBordMob({ data }: TProps) {
  window.scroll(0, 0);

  const el: IData = data
    ? data
    : JSON.parse(localStorage.getItem('details') || 'Люблю ТС');
  return (
    <Container>
      <main className="px-4 pt-6 pb-9 text-xl text-standart">
        <p className="mb-6 block border-b border-solid border-fill pb-6 font-bold">
          Job Details
        </p>
        <div className="mb-8 flex">
          <p className="sr-only">Manipulation</p>
          <div className="mr-9 flex items-center">
            <Star className="mr-3" />
            <span>Save to my list</span>
          </div>
          <div className="flex items-center">
            <Shape className="mr-3" />
            <span>Shape</span>
          </div>
        </div>
        <h2 className="mb-[5px] font-bold">{el.title}</h2>
        <div className="justify-content: mb-4 flex items-center justify-between">
          <p className="block max-w-[200px] text-filltex">
            {takeDifferenceTime(el.updatedAt)}
          </p>
          <div className="text-end">
            <p>Brutto, per year</p>
            <p className="flex-col justify-end font-bold">
              &#8364; {el.salary.replace(/k/g, '00')}
            </p>
          </div>
        </div>
        <Mob el={el.description} />
        <div className=" flex justify-center">
          <Button />
        </div>
        <section className="mt-36 mb-14">
          <h3 className=" mb-2 border-b-2  font-bold ">Attached images</h3>
          <ul className="flex gap-2">
            {el.pictures.map(el => {
              return <img className="block h-36 w-1/3" src={el} alt="foto" />;
            })}
          </ul>
        </section>
        <section>
          <h3 className="mb-2 border-b-2 font-bold ">Additional info</h3>
          <p className="mb-2">Employment type</p>
          <ul className="mb-5 flex  flex-wrap gap-2">
            {el.employment_type.map(el => {
              return (
                <li className="max-w-[150px] rounded-lg bg-employ px-6 py-4 text-center text-empolyText">
                  {el}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h3 className="mb-2">Benefits</h3>
          <ul className="mb-16 flex flex-wrap gap-2">
            {el.benefits.map(el => {
              return (
                <li className="max-w-[150px] rounded-lg  bg-benefits px-2 py-4 text-center text-benefitsText">
                  {el}
                </li>
              );
            })}
          </ul>
        </section>
        <address>
          <h3 className="mb-5 border-b-2  font-bold">Contacts</h3>{' '}
          <div className=" rounded-t-lg bg-[#2A3047] px-16 pt-8 pb-6  text-[#E7EAF0] opacity-95">
            <p className="mb-4">
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
