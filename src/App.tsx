import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function matryx(row: number): any {
    let index = 0;
    function helper(arg: any, idx = 0, number: any): any {
      if (arg[idx].length === 4) {
        index += 1;
        helper(arg, index, number);
        return;
      }
      if (
        arg[idx].length - arg[idx + 1]?.length === 2 ||
        arg[idx + 1]?.length - arg[idx + 2]?.length === 2
      ) {
        helper(arg, idx + 1, number);
        return;
      }
      arg[idx].push(number);
      return arg;
    }

    function calc(row: number): any {
      const numbers: any = [];
      const arr: any = [];
      for (let i = 0; i < row * 4; i++) {
        numbers.push(i);
        if (i < row) {
          arr.push([]);
        }
      }
      const result = numbers.reduce((acc: any, el: any, idx: number) => {
        const result = helper(arr, index, el);
        acc = result;
        return acc;
      }, arr);

      return result;
    }
    return calc(row);
  }
  // function heatmapMatrix(rows: any, cols: any) {
  //   const matrix: any = [];
  //   const diagonals = rows + cols - 1;

  //   let number = 0;
  //   for (let i = 0; i < diagonals; i++) {
  //     const diagonals_combination = find_index_combinations(i, rows, cols);
  //     for (const item of diagonals_combination) {
  //       console.log(matrix[item[0]][item[1]]);

  //       matrix[item[0]][item[1]] = number;
  //       number += 1;
  //     }
  //   }
  //   console.log('matrix', matrix);
  //   // return matrix;
  // }
  // function find_index_combinations(d: any, rows: any, cols: any) {
  //   const diagonals_combination = [];

  //   for (let i = 0, k = rows; i < k; i++) {
  //     for (let j = 0, r = cols; j < r; j++) {
  //       if (i + j === d) {
  //         diagonals_combination.push([i, j]);
  //       }
  //     }
  //   }

  //   return diagonals_combination;
  // }
  console.time();
  console.log(matryx(7));
  console.timeEnd();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
