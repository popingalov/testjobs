import { ReactComponent as Star } from '../../assets/icons/starDetails.svg';
import { ReactComponent as Shape } from '../../assets/icons/shapeLink.svg';
import { takeDifferenceTime } from '../../helperFunc';
import Mob from 'components/JobText/Mob';
import Button from 'components/Button';
import Map from 'components/Map';
type TProps = {
  data: IData;
};

export default function DetailsBord({ data }: TProps) {
  const el: IData = data
    ? data
    : JSON.parse(localStorage.getItem('details') || 'Люблю ТС');

  return (
    <main className="px-4 pt-6 pb-9 text-standart">
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
      <Button />
      <section className="mt-36 mb-14">
        <h3 className=" mb-2 border-b-2 font-bold ">Attached images</h3>
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
              <li className="max-w-[150px] rounded-lg  bg-benefits px-6 py-4 text-center text-benefitsText">
                {el}
              </li>
            );
          })}
        </ul>
      </section>
      <address>
        <h3 className="border-b-2 font-bold">Contacts</h3>
        <Map data={el} />
      </address>
    </main>
  );
}
