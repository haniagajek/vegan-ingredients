/* eslint-disable prettier/prettier */
import React from "react";
import { useContext } from "react";
import { InfoContext } from "../contexts/InfoContext";
import { IdContext } from "../contexts/IdContext";
import { InputContext } from "../contexts/InputContext";
// trzeba zrobic zmienna ktora przyjmuje numer przedzialu w tabeli tak zeby byl np 1 i 1 i na pierwszym bedzie func(click) a na drugim bedzie wysuwanie
/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 * @return {JSX.Element} The rendered Home component.
 */
export function Ingredients() {
  const { info, SetShowInfo } = useContext(InfoContext);
  const { ids, setIds } = useContext(IdContext);
  const { input, setInput } = useContext(InputContext);

  const closeRow = (rowId) => {
    setIds(ids.filter((id) => id !== rowId));
  };

  const openRow = (rowId) => {
    setIds([...ids, rowId]);
  };

  const toggleRow = (rowId) => {
    if (ids.includes(rowId)) {
      closeRow(rowId);
      console.log(ids);
    } else {
      openRow(rowId);
      console.log(ids);
    }
  };

  const handleSubmit = (e) => {
    const val = e.target.value;
    setInput(val);
  };

  function nameLoop(name) {
    console.log(name.includes(input));
  }

  // function filterAll(x, y) {
  //   console.log(x.split("").filter(y.split(""));
  // }

  // trzeba zrobic tak zeby wyszukiwalo

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-20 ">
      <input
        name="searchMeal"
        type="text"
        id="table-search"
        class="block p-2 ps-6 text-sm ml-auto mr-auto my-2 text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Search for meals"
        onChange={handleSubmit}
      ></input>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500  ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200 ">
          <tr>
            <th scope="col" class="px-6 py-3">
              Meal name
            </th>
            <th scope="col" class="px-6 py-3">
              Calories
            </th>
            <th scope="col" class="px-6 py-3">
              Level
            </th>
            <th scope="col" class="px-6 py-3">
              Info
            </th>
          </tr>
        </thead>
        <tbody>
          {"pumpkin risotto".includes(input) || input.length == 0 ? (
            <tr class="odd:bg-white  even:bg-gray-200 ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Pumpkin risotto
              </th>
              <td class="px-6 py-4">1000 kcal</td>
              <td class="px-6 py-4">Medium</td>

              <button
                class="px-9 m-1 py-4"
                onClick={() => {
                  toggleRow(1);
                  SetShowInfo(true);
                }}
              >
                ...
              </button>
            </tr>
          ) : (
            <td></td>
          )}

          {info && ids.includes(1) ? (
            <tr class="odd:bg-white  even:bg-gray-200 border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap e"
              >
                info
              </th>
              <td class="px-6 py-4">infoPR</td>
              <td class="px-6 py-4">info</td>
              <button
                class="px-9 m-1 py-4 bg-gray-300"
                onClick={() => {
                  SetShowInfo(false);
                }}
              >
                ^
              </button>
            </tr>
          ) : (
            <td></td>
          )}
          {"butter masala".includes(input) || input.length == 0 ? (
            <tr class="odd:bg-white  even:bg-gray-200 ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Butter masala
              </th>
              <td class="px-6 py-4">1000 kcal</td>
              <td class="px-6 py-4">Easy</td>
              <button
                class="px-9 m-1 py-4"
                onClick={() => {
                  toggleRow(2);
                  SetShowInfo(true);
                }}
              >
                ...
              </button>
            </tr>
          ) : (
            <td></td>
          )}
          {info && ids.includes(2) ? (
            <tr class="odd:bg-white  even:bg-gray-200 border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap e"
              >
                info
              </th>
              <td class="px-6 py-4">infoBM</td>
              <td class="px-6 py-4">info</td>
              <button
                class="px-9 m-1 py-4 bg-gray-300"
                onClick={() => {
                  SetShowInfo(false);
                  toggleRow(2);
                }}
              >
                ^
              </button>
            </tr>
          ) : (
            <td></td>
          )}
        </tbody>
      </table>
    </div>
  );
}
// {"Butter masala".includes(input) || input.length == 0 ? (
//   <tr class="odd:bg-white  even:bg-gray-200 ">
//     <th
//       scope="row"
//       class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
//     >
//       Butter masala
//     </th>
//     <td class="px-6 py-4">1000 kcal</td>
//     <td class="px-6 py-4">Easy</td>
//     <button
//       class="px-9 m-1 py-4"
//       onClick={() => {
//         toggleRow(2);
//         SetShowInfo(true);
//       }}
