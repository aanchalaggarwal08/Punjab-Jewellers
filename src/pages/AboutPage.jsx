import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {

  return (

    <div className="min-h-screen bg-[#FFF9F7] text-[#403434]">

      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-10 lg:px-16 pt-20 pb-16 text-center">

        <p className="uppercase tracking-[0.35em] text-[#B08D74] text-sm">
          Punjab Jewellers
        </p>

        <h1
          className="text-5xl md:text-7xl mt-6 leading-tight"
          style={{ fontFamily: "Playfair Display" }}
        >
          A Legacy of
          <br />
          Timeless Elegance
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-[#6E5F5F]">

          For generations, Punjab Jewellers has celebrated the beauty of
          craftsmanship, luxury, and heritage through jewellery designed
          to create unforgettable memories.

        </p>

      </section>

      {/* Story Section */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>

            <img
src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1200&auto=format&fit=crop"
              alt="Jewellery"
              className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
            />

          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[0.3em] text-[#B08D74] text-sm mb-4">
              Our Story
            </p>

            <h2
              className="text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              Crafted with
              <br />
              Passion & Precision
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#6E5F5F]">

              Every jewellery piece at Punjab Jewellers reflects artistry,
              elegance, and exceptional craftsmanship. Our collections are
              thoughtfully curated to blend traditional heritage with
              modern sophistication.

            </p>

            <p className="mt-6 text-lg leading-9 text-[#6E5F5F]">

              From bridal masterpieces to everyday luxury, we aim to make
              every moment shine beautifully with timeless designs and
              unmatched quality.

            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.3em] text-[#B08D74] text-sm">
            Why Choose Us
          </p>

          <h2
            className="text-5xl mt-5"
            style={{ fontFamily: "Playfair Display" }}
          >
            Luxury You Can Trust
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-[35px] p-10 shadow-lg text-center">

            <h3
              className="text-3xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Premium Craftsmanship
            </h3>

            <p className="mt-6 leading-8 text-[#6E5F5F]">

              Expertly designed jewellery crafted with precision,
              elegance, and timeless artistry.

            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[35px] p-10 shadow-lg text-center">

            <h3
              className="text-3xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Trusted Heritage
            </h3>

            <p className="mt-6 leading-8 text-[#6E5F5F]">

              A legacy built on trust, authenticity, and exceptional
              customer relationships.

            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[35px] p-10 shadow-lg text-center">

            <h3
              className="text-3xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Timeless Designs
            </h3>

            <p className="mt-6 leading-8 text-[#6E5F5F]">

              Modern luxury collections inspired by timeless beauty
              and sophisticated style.

            </p>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default AboutPage;