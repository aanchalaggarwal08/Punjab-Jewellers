import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CollectionsPage() {
  return (

    <div className="min-h-screen bg-[#FFF9F7] text-[#403434]">

      <Navbar />

      {/* Collections Header */}
      <section className="px-6 md:px-10 lg:px-16 pt-10 pb-8">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[0.3em] text-[#B08D74] text-sm">
              Punjab Jewellers Collections
            </p>

            <h1
              className="text-4xl md:text-5xl mt-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Discover Timeless Jewellery
            </h1>

          </div>

          {/* Right */}
          <div className="flex flex-wrap gap-4">

           <Link
             to="/collections/gold"
             className="px-5 py-3 rounded-full border border-[#D8B7A0] hover:bg-[#B76E79] hover:text-white transition duration-300 text-center">
                Gold Jewellery
            </Link>
            
             <Link
            to="/collections/silver"
            className="px-5 py-3 rounded-full border border-[#D8B7A0] hover:bg-[#B76E79] hover:text-white transition duration-300 text-center">
            Silver Collection
            </Link>

            <Link
             to="/collections/rings"
            className="px-5 py-3 rounded-full border border-[#D8B7A0] hover:bg-[#B76E79] hover:text-white transition duration-300 text-center">
             Rings
            </Link>

           <Link
             to="/collections/bridal"
              className="px-5 py-3 rounded-full border border-[#D8B7A0] hover:bg-[#B76E79] hover:text-white transition duration-300 text-center">
               Bridal Jewellery
           </Link>

          <Link
            to="/collections/men"
            className="px-5 py-3 rounded-full border border-[#D8B7A0] hover:bg-[#B76E79] hover:text-white transition duration-300 text-center">
            Men's Collection
          </Link>

          <Link
          to="/collections/earrings"
          className="px-5 py-3 rounded-full border border-[#D8B7A0] hover:bg-[#B76E79] hover:text-white transition duration-300 text-center">
          Earrings
          </Link>
         
          <Link
          to="/collections/necklaces"
         className="px-5 py-3 rounded-full border border-[#D8B7A0] hover:bg-[#B76E79] hover:text-white transition duration-300 text-center">
         Necklaces
         </Link>

          </div>

        </div>

      </section>

      {/* Main Collections Layout */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* Sidebar */}
          <div className="bg-white rounded-[30px] p-8 h-fit shadow-sm border border-[#F1E5E2]">

            <h2
              className="text-3xl mb-8"
              style={{ fontFamily: "Playfair Display" }}
            >
              Categories
            </h2>

            <div className="flex flex-col gap-5 text-lg">

  <Link
    to="/collections/gold"
    className="hover:text-[#B76E79] transition"
  >
    Gold Jewellery
  </Link>

  <Link
    to="/collections/silver"
    className="hover:text-[#B76E79] transition"
  >
    Silver Collection
  </Link>

  <Link
    to="/collections/rings"
    className="hover:text-[#B76E79] transition"
  >
    Rings
  </Link>

  <Link
    to="/collections/necklaces"
    className="hover:text-[#B76E79] transition"
  >
    Necklaces
  </Link>

  <Link
    to="/collections/earrings"
    className="hover:text-[#B76E79] transition"
  >
    Earrings
  </Link>

  <Link
    to="/collections/men"
    className="hover:text-[#B76E79] transition"
  >
    Men's Collection
  </Link>

  <Link
    to="/collections/bridal"
    className="hover:text-[#B76E79] transition"
  >
    Bridal Jewellery
  </Link>

</div>

          </div>

          {/* Right Side */}
          <div className="lg:col-span-3">
            {/* Featured Collection Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">

  {/* Card 1 */}
  <div className="relative overflow-hidden rounded-[35px] bg-[#F4ECE8] group min-h-[320px]">

    <img
      src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop"
      alt=""
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-black/20"></div>

    <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">

      <p className="uppercase tracking-[0.3em] text-sm">
        Bridal Collection
      </p>

      <h2
        className="text-4xl mt-4 leading-tight"
        style={{ fontFamily: "Playfair Display" }}
      >
        Crafted for
        <br />
        Celebrations
      </h2>

    </div>

  </div>

  {/* Card 2 */}
  <div className="relative overflow-hidden rounded-[35px] bg-[#F4ECE8] group min-h-[320px]">

    <img
      src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
      alt=""
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-black/20"></div>

    <div className="relative z-10 p-10 flex flex-col justify-end h-full text-white">

      <p className="uppercase tracking-[0.3em] text-sm">
        Men's Collection
      </p>

      <h2
        className="text-4xl mt-4 leading-tight"
        style={{ fontFamily: "Playfair Display" }}
      >
        Modern
        <br />
        Everyday Luxury
      </h2>

    </div>

  </div>

</div>

    

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">

              {/* Product 1 */}
              <div className="group">

                <div className="overflow-hidden rounded-[30px] bg-[#F4ECE8] relative">

                  <img
                    src="https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1200&auto=format&fit=crop"
                    alt=""
                    className="h-[380px] w-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow-md hover:scale-110 transition">
                    ♡
                  </button>

                </div>

                <h2
                  className="text-3xl mt-5"
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

                <div className="overflow-hidden rounded-[30px] bg-[#F4ECE8] relative">

                  <img
                    src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop"
                    alt=""
                    className="h-[380px] w-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow-md hover:scale-110 transition">
                    ♡
                  </button>

                </div>

                <h2
                  className="text-3xl mt-5"
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

                <div className="overflow-hidden rounded-[30px] bg-[#F4ECE8] relative">

                  <img
                    src="https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=1200&auto=format&fit=crop"
                    alt=""
                    className="h-[380px] w-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow-md hover:scale-110 transition">
                    ♡
                  </button>

                </div>

                <h2
                  className="text-3xl mt-5"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Men's Bracelet
                </h2>

                <p className="mt-2 text-[#B08D74] text-lg">
                  ₹ 14,999
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default CollectionsPage;