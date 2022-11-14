import React, { FC } from 'react';
import s from './JobGulery.module.css';

import Card from './Card';

const JobGulery: FC<TDataSize> = ({ apiData, starSize, upArray }) => {
  return (
    <main>
      <section className={s.JobGulery}>
        <h1 className="sr-only">Job board</h1>
        <ul>
          <Card apiData={apiData} starSize={starSize} upArray={upArray} />
        </ul>
      </section>
    </main>
  );
};

export default JobGulery;
