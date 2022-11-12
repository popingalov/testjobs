// import React, { useRef, useEffect } from 'react';
import Container from '../../components/Container/Container';
import JobGulery from '../../components/JobGulery';
import Pagination from '../../components/Pagination';
export default function Home({ apiData, starSize, loadData }: TDataSize) {
  const imitPag = 28;
  return (
    <Container>
      <div className="flex flex-col items-center">
        <JobGulery loadData={loadData} apiData={apiData} starSize={starSize} />
        <Pagination loadData={loadData} limit={imitPag} />
      </div>
    </Container>
  );
}
