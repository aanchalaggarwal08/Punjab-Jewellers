import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { WishlistContext } from "../context/WishlistContext";

function WishlistPage() {

  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  return (

    <div className="min-h-screen bg-[#FFF9F7] text-[#403434]">

      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 pt-20 pb-20">

        {/* Heading */}
        <div className="mb-12">

          <p className="uppercase tracking-[0.3em] text-[#B08D74] text-sm">
            Punjab Jewellers
          </p>

          <h1
            className="text-5xl mt-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            Your Wishlist
          </h1>

        </div>

        {/* Empty Wishlist */}
        {wishlist.length === 0 ? (

          <div className="bg-white rounded-[40px] p-16 text-center shadow-lg">

            <h2
              className="text-4xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Wishlist is Empty
            </h2>

            <p className="mt-4 text-[#6E5F5F] text-lg">
              Save your favourite jewellery pieces here.
            </p>

          </div>

        ) : (

          /* Products Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >

                {/* Image */}
                <Link to={`/product/${product.id}`}>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover hover:scale-105 transition duration-700"
                  />

                </Link>

                {/* Content */}
                <div className="p-6">

                  <h2
                    className="text-3xl"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {product.name}
                  </h2>

                  <p className="mt-3 text-[#B76E79] text-xl">
                    {product.price}
                  </p>

                  <p className="mt-2 text-[#7A6B6B]">
                    Weight: {product.weight}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-6">

                    <Link to={`/product/${product.id}`}>

                      <button className="px-5 py-3 bg-[#B76E79] text-white rounded-full hover:bg-[#a85f6b] transition duration-300">

                        View Product

                      </button>

                    </Link>

                    <button
                      onClick={() => toggleWishlist(product)}
                      className="px-5 py-3 border border-[#B76E79] rounded-full hover:bg-[#B76E79] hover:text-white transition duration-300"
                    >

                      Remove

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      <Footer />

    </div>

  );
}

export default WishlistPage;