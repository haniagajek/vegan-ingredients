import React from "react";

/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 * @return {JSX.Element} The rendered Home component.
 */
export function Ingredients() {
  return (
    <div className="max-w-max mx-auto ">
      <table className="text-tod border-separate border-spacing-x-20 border-spacing-y-8 border mt-24 text-center">
        <thead>
          <tr>
            <th className="bg-blo px-14 hover:bg-blt">Meal</th>
            <th className="bg-blo px-14 hover:bg-blt">Calories</th>
            <th className="bg-blo px-14 hover:bg-blt">Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sesame Noodles</td>
            <td>1000kcal</td>
            <td>Easy</td>
          </tr>
          <tr>
            <td>Pumpkin Risotto</td>
            <td>1000kcal</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>Green Tahini Dip</td>
            <td>1000kcal</td>
            <td>Easy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
