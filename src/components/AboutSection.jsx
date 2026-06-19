function AboutSection() {
  return (

    <section className="px-6 md:px-10 lg:px-16 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

      {/* Left Image */}
      <div className="w-full lg:w-1/2 flex justify-center">

        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-[85%] md:w-[70%] lg:w-full max-w-[500px] h-[350px] md:h-[500px] lg:h-[650px] object-cover rounded-[30px] lg:rounded-[40px] shadow-xl"
        />

      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">

        <p className="uppercase tracking-[0.3em] text-[#B08D74]">
          About Us
        </p>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl mt-5 leading-tight"
          style={{ fontFamily: "Playfair Display" }}
        >
          Timeless Craftsmanship
          <br />
          Modern Luxury
        </h1>

        <p className="mt-8 text-lg text-[#6E5F5F] leading-9">

          Punjab Jewellers brings together elegance,
          craftsmanship and timeless design through
          beautifully curated gold and silver jewellery
          collections for both men and women.

        </p>

        <p className="mt-6 text-lg text-[#6E5F5F] leading-9">

          From statement bridal pieces to minimal
          everyday jewellery, every design reflects
          sophistication, trust and premium artistry.

        </p>

        <button className="mt-10 px-8 md:px-10 py-3 md:py-4 mx-auto lg:mx-0 border border-[#B08D74] rounded-full hover:bg-[#B08D74] hover:text-white transition duration-300">

          Learn More

        </button>

      </div>

    </section>

  );
}

export default AboutSection;