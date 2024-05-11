/* eslint-disable prettier/prettier */
import React from "react";
import { useContext } from "react";
import { InfoContext } from "../contexts/InfoContext";
import { IdContext } from "../contexts/IdContext";
// trzeba zrobic zmienna ktora przyjmuje numer przedzialu w tabeli tak zeby byl np 1 i 1 i na pierwszym bedzie func(click) a na drugim bedzie wysuwanie
/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 * @return {JSX.Element} The rendered Home component.
 */
export function Ingredients() {
  const { info, SetShowInfo } = useContext(InfoContext);
  const { id, SetId } = useContext(IdContext);

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-20 ">
      <input
        type="text"
        id="table-search"
        class="block p-2 ps-6 text-sm ml-auto mr-auto my-2 text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="Search for meals"
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
              value={1}
              onClick={() => {
                SetId(1);
                SetShowInfo(true);
                console.log(id);
              }}
            >
              ...
            </button>
          </tr>
          {info && id == 1 ? (
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
                onClick={() => SetShowInfo(false)}
              >
                ^
              </button>
            </tr>
          ) : (
            <td></td>
          )}
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
              value={2}
              onClick={() => {
                SetId(2);
                SetShowInfo(true);
                console.log(id);
              }}
            >
              ...
            </button>
          </tr>
          {info && id == 2 ? (
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
                onClick={() => SetShowInfo(false)}
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
