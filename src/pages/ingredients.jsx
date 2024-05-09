/* eslint-disable prettier/prettier */
import React from "react";

// trzeba zrobic zmienna ktora przyjmuje numer przedzialu w tabeli tak zeby byl np 1 i 1 i na pierwszym bedzie func(click) a na drugim bedzie wysuwanie
/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 * @return {JSX.Element} The rendered Home component.
 */
export function Ingredients() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
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
          </tr>
          <tr class="odd:bg-white  even:bg-gray-200 border-b ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap e"
            >
              info
            </th>
            <td class="px-6 py-4">info</td>
            <td class="px-6 py-4">info</td>
          </tr>
          <tr class="odd:bg-white  even:bg-gray-200 ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              Butter masala
            </th>
            <td class="px-6 py-4">1000 kcal</td>
            <td class="px-6 py-4">Easy</td>
          </tr>
          <tr class="odd:bg-white  even:bg-gray-200 ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              info
            </th>
            <td class="px-6 py-4">info</td>
            <td class="px-6 py-4">info</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
