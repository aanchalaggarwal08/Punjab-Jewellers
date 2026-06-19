import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function ProductPage() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (

    <div className="min-h-screen bg-[#FFF9F7] text-[#403434]">

      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 pt-20 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-[40px] shadow-2xl group">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[420px] md:h-[550px] object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

          {/* Content */}
          <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-lg h-fit">

            <p className="uppercase tracking-[0.3em] text-[#B08D74] text-sm">
              Punjab Jewellers
            </p>

            <h1
              className="text-4xl md:text-5xl mt-4 leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              {product.name}
            </h1>

            <p className="text-3xl mt-6 text-[#B76E79] font-medium">
              {product.price}
            </p>

            <p className="mt-4 text-lg text-[#6E5F5F]">
              Weight: {product.weight}
            </p>

            <div className="w-20 h-[2px] bg-[#E5D4CB] mt-8"></div>

            <p className="mt-8 leading-8 text-[#6E5F5F] text-lg">

              Crafted with elegance and timeless sophistication,
              this jewellery piece reflects luxury artistry
              designed for modern lifestyles and special occasions.

            </p>

            {/* Buttons */}
           <div className="flex flex-wrap items-center gap-3 mt-8">

             <button
              onClick={() => toggleWishlist(product)}
           className={`px-8 py-4 rounded-full transition duration-300 hover:scale-105 shadow-lg

             ${
              wishlist.find((item) => item.id === product.id)
              ? "bg-[#403434] text-white"
              : "bg-[#B76E79] text-white"
            }`}
          >

          {wishlist.find((item) => item.id === product.id)
          ? "Added to Wishlist ♥"
          : "Add to Wishlist"}

         </button>

              <a
               href={`https://wa.me/917888377610?text=Hi,%20I%20want%20to%20enquire%20about%20${product.name}%20priced%20at%20${product.price}`}
                target="_blank"
                rel="noreferrer"
              >

                <button className="px-6 py-4 border border-[#B76E79] rounded-full hover:bg-[#B76E79] hover:text-white transition duration-300">

                  Enquire on WhatsApp

                </button>

              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default ProductPage;