import { Link } from "react-router-dom";


function Footer() {

  return (

    <footer className="bg-[#1F1A17] text-[#F5ECE7] px-6 md:px-10 lg:px-16 pt-20 pb-10 mt-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* Brand */}
        <div>

          <h1
            className="text-4xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Punjab Jewellers
          </h1>

          <p className="mt-6 leading-8 text-[#CBB8AE]">

            Celebrating timeless elegance with luxury jewellery
            crafted for every special moment.

          </p>

      

        </div>

        {/* Quick Links */}
        <div>

          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Quick Links
          </h2>

          <div className="flex flex-col gap-4 text-[#CBB8AE]">

            <Link to="/" className="hover:text-white transition">
              Home
            </Link>

            <Link to="/collections" className="hover:text-white transition">
              Collections
            </Link>

            <Link to="/about" className="hover:text-white transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>

          </div>

        </div>

        {/* Collections */}
        <div>

          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Collections
          </h2>

          <div className="flex flex-col gap-4 text-[#CBB8AE]">

            <Link to="/collections/gold" className="hover:text-white transition">
              Gold Jewellery
            </Link>

            <Link to="/collections/silver" className="hover:text-white transition">
              Silver Jewellery
            </Link>

            <Link to="/collections/rings" className="hover:text-white transition">
              Rings
            </Link>

            <Link to="/collections/bracelets" className="hover:text-white transition">
              Bracelets
            </Link>

          </div>

        </div>

        {/* Contact */}
        <div>

          <h2
            className="text-2xl mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Contact
          </h2>

          <div className="space-y-4 text-[#CBB8AE] leading-7">

            <p>
              Hall Bazaar, Amritsar,
              Punjab, India
            </p>

            <p>
              +91 78883 77610
            </p>

            <p>
              punjabjewellers@email.com
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-[#3A302B] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#BCA89D] text-sm">

        <p>
          © 2026 Punjab Jewellers. All rights reserved.
        </p>

        <p className="flex items-center gap-2">

          Crafted with elegance & luxury

        </p>

      </div>

    </footer>

  );
}

export default Footer;