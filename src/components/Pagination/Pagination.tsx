/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { NavLink, useLocation, useParams } from 'react-router-dom';
//
import Number from './Number';
//
import s from './Pagination.module.css';
import useRenderArray from '../../hooks/useRenderArray';

interface PaginationProps {
  limit: number;
  loadData: any;
}

const Pagination: FC<PaginationProps> = ({ limit, loadData }) => {
  const location = useLocation();
  const { pageNumber = 1 } = useParams();
  const [idxNumber, setIdxNumber] = useState(+pageNumber);
  const { renderEl, setRender } = useRenderArray(limit);
  const [load, setLoad]: any = useState(1);

  function handler(e: React.MouseEvent<HTMLElement>) {
    const target = +e.currentTarget.innerText;
    if (target === limit) {
      reverseLoadMore();
    }
    setIdxNumber(target);
  }

  useEffect(() => {
    loadData(pageNumber);
    const idx = JSON.stringify(renderEl);
    window.localStorage.setItem('idx', idx);
  }, [idxNumber]);

  function reverseLoadMore() {
    const result: any = renderEl.map((el, idx) => {
      return el === limit ? limit : limit - (idx + 1);
    });
    result.pop();
    result.reverse();
    result.push(limit);
    setIdxNumber(result[0]);
    setRender(result);
  }

  function loadMore(triger: boolean = false) {
    if (triger) {
      if (idxNumber > 5) {
        const result: any = renderEl.map((el, idx) => {
          return el === limit ? limit : el - 5;
        });
        setIdxNumber(result[4]);
        setRender(result);
        return;
      }
      const result: any = renderEl.map((el, idx) => {
        return el === limit ? limit : idx + 1;
      });
      setIdxNumber(result[0]);
      setRender(result);
      return;
    }
    const result: any = renderEl.map((el, idx) => {
      return el === limit ? limit : el + 5;
    });
    setIdxNumber(result[0]);
    setRender(result);
  }

  useEffect(() => {
    if (limit - renderEl[4] === 1) return;
    if (load > 1) {
      if (limit - renderEl[4] < 5) {
        reverseLoadMore();
        return;
      }

      loadMore();
    }
  }, [load]);

  function arrowHandler(e: React.MouseEvent<SVGSVGElement>): void {
    if (idxNumber === 1) return;

    const size = e.currentTarget.dataset.side;

    if (size === 'l') {
      if (idxNumber !== renderEl[0]) {
        setIdxNumber(idxNumber - 1);
        return;
      }

      setIdxNumber(idxNumber - 1);
      loadMore(true);
      return;
    }

    setIdxNumber(idxNumber + 1);
    if (idxNumber === renderEl[4]) {
      loadMore();
    }
  }
  function Span({ load }: any) {
    return (
      <NavLink
        to={`${location.state}/${
          idxNumber === 1 ? idxNumber : renderEl[4] + 1
        }`}
        state={location.state}
        onClick={load}
        className="relative inline-flex h-6 w-6 items-center  bg-white px-2 py-2 text-sm font-medium text-gray-700"
      >
        ...
      </NavLink>
    );
  }
  return (
    <nav
      className="isolate inline-flex  -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <NavLink
        to={`${location.state}/${idxNumber === 1 ? idxNumber : idxNumber - 1}`}
        state={location.state}
        className={s.arrow}
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon
          data-side="l"
          onClick={arrowHandler}
          className="h-5 w-5"
          aria-hidden="true"
        />
      </NavLink>
      {renderEl.map((el: number, idx: number) => {
        return (
          <>
            <Number
              location={location}
              key={el}
              handler={handler}
              triger={idxNumber === el ? true : false}
              number={el}
            />
            {idx === 4 && (
              <Span
                key={limit + 1}
                load={() => setLoad((prev: number) => (prev += 1))}
              />
            )}
          </>
        );
      })}

      <NavLink
        to={`${location.state}/${
          idxNumber === limit ? idxNumber : idxNumber + 1
        }`}
        state={location.state}
        className={s.arrow}
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon
          data-side="r"
          onClick={arrowHandler}
          className="h-5 w-5"
          aria-hidden="true"
        />
      </NavLink>
    </nav>
  );
};
export default Pagination;
