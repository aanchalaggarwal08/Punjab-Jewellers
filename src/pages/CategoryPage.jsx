import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";

function CategoryPage() {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const { category } = useParams();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filteredProducts = products.filter(
    (item) =>
      item.category === category &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProducts];

  if (sort === "low") {
    sortedProducts.sort(
      (a, b) =>
        Number(a.price.replace(/[^0-9]/g, "")) -
        Number(b.price.replace(/[^0-9]/g, ""))
    );
  }

  if (sort === "high") {
    sortedProducts.sort(
      (a, b) =>
        Number(b.price.replace(/[^0-9]/g, "")) -
        Number(a.price.replace(/[^0-9]/g, ""))
    );
  }

  return (

    <div className="min-h-screen bg-[#FFF9F7] text-[#403434]">

      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 py-16">

        {/* Heading */}
        <div className="mb-12">

          <p className="uppercase tracking-[0.3em] text-[#B08D74] text-sm">
            Punjab Jewellers
          </p>

          <h1
            className="text-5xl mt-4 capitalize"
            style={{ fontFamily: "Playfair Display" }}
          >
            {category} Collection
          </h1>

        </div>

        {/* Search + Sort */}
        <div className="mb-10 flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Search jewellery..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[400px] px-6 py-4 rounded-full border border-[#E2D6CF] bg-white outline-none focus:border-[#B76E79]"
          />

      <div className="relative w-fit">

  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    className="px-6 pr-12 py-4 rounded-full border border-[#E2D6CF] bg-white outline-none appearance-none"
  >

    <option value="">Sort By</option>
    <option value="low">Price: Low to High</option>
    <option value="high">Price: High to Low</option>

  </select>

  <span className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
    ▼
  </span>

</div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

          {sortedProducts.map((product) => (

            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group w-full max-w-[280px] transition duration-500 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="overflow-hidden rounded-[30px] bg-[#F4ECE8] relative shadow-sm group-hover:shadow-2xl transition duration-500">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[260px] w-[280px] object-cover rounded-[30px] transition duration-700 group-hover:scale-105"
                />

                {/* Wishlist */}
                <button
                  onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(product);
                   }}
                className={`absolute top-4 right-4 w-10 h-10 rounded-full shadow-md transition duration-300 hover:scale-110 flex items-center justify-center text-lg

                 ${
                wishlist.find((item) => item.id === product.id)
                ? "bg-[#B76E79] text-white"
                : "bg-white text-[#403434]"
                }`}
                >

  {wishlist.find((item) => item.id === product.id)
    ? "♥"
    : "♡"}

</button>

              </div>

              {/* Product Info */}
              <h2
                className="text-3xl mt-5"
                style={{ fontFamily: "Playfair Display" }}
              >
                {product.name}
              </h2>

              <p className="mt-2 text-[#B08D74] text-lg">
                {product.price}
              </p>

              <p className="mt-1 text-[#8A7A7A]">
                Weight: {product.weight}
              </p>

            </Link>

          ))}

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default CategoryPage;