/* eslint-disable prettier/prettier */
import React from "react";

/**
 * Renders the Home component.
 * @remarks
 * WIP: Currently function as a placeholder for the homepage.
 * @return {JSX.Element} The rendered Home component.
 */
export function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <h1 className="text-tod text-4xl font-bold text-left my-5">
        Welcome to My Full-Width Homepage!
      </h1>
      <p className="text-ttd text-lg text-left mb-6">Penis</p>

      <section className="mb-6">
        <h2 className="text-tod text-3xl font-semibold text-left mb-4">
          About Us
        </h2>
        <p className="text-ttd text-lg text-left">
          Nobis sint unde vel vel voluptatum.Animi iure ad voluptas quas
          recusandae. Totam delectus alias quia. Culpa consequuntur enim
          excepturi sit ducimus aut similique consectetur eligendi. Itaque
          perferendis sint ut qui placeat. Nisi blanditiis quia autem rem ipsum
          debitis voluptas ullam rerum. Ab est aut beatae ut temporibus.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-tod text-3xl font-semibold text-left mb-4">
          Our Services
        </h2>
        <p className="text-ttd text-lg text-left">
          Nunc non orci libero. Vivamus arcu arcu, pellentesque sit amet
          condimentum hendrerit, vehicula eget dolor. Curabitur fermentum, nisi
          ac vestibulum fringilla, orci nunc iaculis dolor, non mollis massa
          neque id ex.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-tod text-3xl font-semibold text-left mb-4">
          Contact Us
        </h2>
        <p className="text-ttd text-lg text-left">
          Duis nec velit molestie, lobortis ligula in, lobortis augue. Praesent
          ut magna justo. Fusce id orci sed ante fermentum molestie. Sed nec
          quam felis. Aliquam sit amet felis orci.
        </p>
      </section>
    </div>
  );
}
