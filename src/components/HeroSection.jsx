import { Link } from "react-router-dom";
function HeroSection() {
  return (

<section className="px-6 md:px-10 lg:px-16 pt-20 pb-16 lg:pt-24 flex flex-col lg:flex-row items-start justify-between gap-14 lg:gap-20 overflow-hidden">

      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-4 lg:mt-10">

        <p className="text-[#B76E79] tracking-[0.35em] uppercase mb-6 text-sm md:text-base">
          Luxury Jewellery Boutique
        </p>

        <h1
          className="text-5xl md:text-6xl lg:text-[78px] leading-[1.05] tracking-[-2px]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Modern Elegance
          <br />
          for Every Woman
        </h1>

        <p className="mt-8 text-lg md:text-xl text-[#6E5F5F] leading-9 w-full lg:w-[85%] mx-auto lg:mx-0">

          Discover timeless jewellery crafted with elegance,
          sophistication, and feminine grace.

        </p>
<Link to="/collections">

  <button className="mt-10 px-10 py-4 mx-auto lg:mx-0 bg-[#B76E79] text-white rounded-full hover:bg-[#a85f6b] hover:scale-105 transition duration-300 shadow-xl">

    Explore Collection

  </button>

</Link>

      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
          alt="Jewellery"
          className="w-full max-w-[520px] h-[420px] md:h-[540px] lg:h-[620px] object-cover rounded-[40px] shadow-2xl"
        />

      </div>

    </section>

  );
}

export default HeroSection;