function Collections() {
  return (

    <section className="px-6 md:px-10 lg:px-16 pt-24 pb-20">

      {/* Heading */}
      <div className="text-center">

        <p className="uppercase tracking-[0.3em] text-[#B08D74]">
          Our Collections
        </p>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl mt-4"
          style={{ fontFamily: "Playfair Display" }}
        >
          Crafted for Every Style
        </h1>

        <div className="w-24 h-[2px] bg-[#B08D74] mx-auto mt-6 rounded-full"></div>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

        {/* Card 1 */}
        <div className="group hover:-translate-y-2 transition duration-500">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="h-[420px] md:h-[450px] w-full object-cover group-hover:scale-110 transition duration-500"
            />

          </div>

          <h2
            className="text-3xl mt-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Gold Jewellery
          </h2>

          <p className="mt-2 text-[#6E5F5F]">
            Elegant timeless gold pieces crafted beautifully.
          </p>

        </div>

        {/* Card 2 */}
        <div className="group hover:-translate-y-2 transition duration-500">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="h-[420px] md:h-[450px] w-full object-cover group-hover:scale-110 transition duration-500"
            />

          </div>

          <h2
            className="text-3xl mt-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Silver Collection
          </h2>

          <p className="mt-2 text-[#6E5F5F]">
            Minimal luxury designed with modern sophistication.
          </p>

        </div>

        {/* Card 3 */}
        <div className="group hover:-translate-y-2 transition duration-500">

          <div className="overflow-hidden rounded-[30px]">

            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="h-[420px] md:h-[450px] w-full object-cover group-hover:scale-110 transition duration-500"
            />

          </div>

          <h2
            className="text-3xl mt-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Men's Collection
          </h2>

          <p className="mt-2 text-[#6E5F5F]">
            Bold rings, chains and bracelets with premium finish.
          </p>

        </div>

      </div>

    </section>

  );
}

export default Collections;