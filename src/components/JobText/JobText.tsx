import s from './s.module.css';

interface IMob {
  el: string;
}

export default function Mob({ el }: IMob) {
  const result = el.match(/(?<=\n)[^\n]+/g)?.filter(e => e.length > 2);
  const last = result && result[4].split('.');
  const firstUl = last?.[0];
  last?.shift();
  last?.pop();
  return (
    <div className="mb-7 font-roboto">
      {result?.map((el, idx) => {
        if (idx === 0) {
          return <p className="mb-10">{el}</p>;
        }
        if (idx === 1) {
          return <h3 className="mb-2 font-bold">{el}</h3>;
        }
        if (idx === 2) {
          return <p className="mb-2">{el}</p>;
        }
        if (idx === 3) {
          return <h3 className="mb-3 font-bold">{el}</h3>;
        }

        return (
          <>
            <p>{firstUl}:</p>
            <ul className={s.list}>
              {last?.map(el => {
                return <li>{el}</li>;
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
}
