function ProductsSections() {
  return (

    <section className="px-6 md:px-10 lg:px-16 pb-24 lg:pb-32">

      {/* Heading */}
      <div className="text-center">

        <p className="uppercase tracking-[0.3em] text-[#B08D74]">
          New Arrivals
        </p>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl mt-4"
          style={{ fontFamily: "Playfair Display" }}
        >
          Signature Pieces
        </h1>

        <div className="w-24 h-[2px] bg-[#B08D74] mx-auto mt-6 rounded-full"></div>

      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

        {/* Product 1 */}
        <div className="group">

          <div className="overflow-hidden rounded-[30px] bg-[#F4ECE8]">

            <img
              src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="h-[350px] md:h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
            />

          </div>

          <h2
            className="text-2xl mt-5"
            style={{ fontFamily: "Playfair Display" }}
          >
            Gold Ring
          </h2>

          <p className="mt-2 text-[#B08D74] text-lg">
            ₹ 24,999
          </p>

        </div>

        {/* Product 2 */}
        <div className="group">

          <div className="overflow-hidden rounded-[30px] bg-[#F4ECE8]">

            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="h-[350px] md:h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
            />

          </div>

          <h2
            className="text-2xl mt-5"
            style={{ fontFamily: "Playfair Display" }}
          >
            Silver Necklace
          </h2>

          <p className="mt-2 text-[#B08D74] text-lg">
            ₹ 18,499
          </p>

        </div>

        {/* Product 3 */}
        <div className="group">

          <div className="overflow-hidden rounded-[30px] bg-[#F4ECE8]">

            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="h-[350px] md:h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
            />

          </div>

          <h2
            className="text-2xl mt-5"
            style={{ fontFamily: "Playfair Display" }}
          >
            Gold Pendant
          </h2>

          <p className="mt-2 text-[#B08D74] text-lg">
            ₹ 22,999
          </p>

        </div>

        {/* Product 4 */}
        <div className="group">

          <div className="overflow-hidden rounded-[30px] bg-[#F4ECE8]">

            <img
              src="https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="h-[350px] md:h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
            />

          </div>

          <h2
            className="text-2xl mt-5"
            style={{ fontFamily: "Playfair Display" }}
          >
            Men's Bracelet
          </h2>

          <p className="mt-2 text-[#B08D74] text-lg">
            ₹ 14,999
          </p>

        </div>

      </div>

    </section>

  );
}

export default ProductsSections;