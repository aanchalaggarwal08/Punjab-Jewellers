import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Heart } from "lucide-react";

function Navbar() {
  const { wishlist } = useContext(WishlistContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="w-full bg-[#FFF9F7] border-b border-[#F0E4DE]">

      <div className="flex justify-between items-center px-6 md:px-10 lg:px-16 py-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full border border-[#C58F8F] flex items-center justify-center">

            <h1
              className="text-2xl text-[#B76E79]"
              style={{ fontFamily: "Playfair Display" }}
            >
              PJ
            </h1>

          </div>

          <h1
            className="text-3xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Punjab Jewellers
          </h1>

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 text-lg">

          <Link to="/" className="hover:text-[#B76E79] transition">
            Home
          </Link>

          <Link to="/collections" className="hover:text-[#B76E79] transition">
            Collections
          </Link>

          <Link to="/about" className="hover:text-[#B76E79] transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-[#B76E79] transition">
            Contact
          </Link>
         <Link
  to="/wishlist"
  className="relative flex items-center"
>

  <Heart className="w-6 h-6 hover:scale-110 transition duration-300" />

  {wishlist.length > 0 && (

    <span className="absolute -top-2 -right-3 bg-[#B76E79] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

      {wishlist.length}

    </span>

  )}

</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden flex flex-col gap-6 px-6 pb-8 text-lg bg-[#FFF9F7]">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#B76E79]"
          >
            Home
          </Link>

          <Link
            to="/collections"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#B76E79]"
          >
            Collections
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#B76E79]"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#B76E79]"
          >
            Contact
          </Link>
          <Link
          to="/wishlist"
          className="text-lg hover:text-[#B76E79] transition duration-300"
          onClick={() => setIsOpen(false)}
          >
          Wishlist ({wishlist.length})
         </Link>

        </div>

      )}

    </nav>

  );
}

export default Navbar;