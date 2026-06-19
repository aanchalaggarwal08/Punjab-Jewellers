import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {

  return (

    <div className="min-h-screen bg-[#FFF9F7] text-[#403434]">

      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 pt-20 pb-14 text-center">

        <p className="uppercase tracking-[0.35em] text-[#B08D74] text-sm">
          Punjab Jewellers
        </p>

        <h1
          className="text-5xl md:text-7xl mt-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Contact Us
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg leading-9 text-[#6E5F5F]">

          We would love to assist you with jewellery enquiries,
          bridal collections, custom designs, and luxury consultations.

        </p>

      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Info */}
          <div className="bg-white rounded-[40px] p-10 shadow-lg">

            <p className="uppercase tracking-[0.3em] text-[#B08D74] text-sm">
              Get In Touch
            </p>

            <h2
              className="text-4xl mt-5"
              style={{ fontFamily: "Playfair Display" }}
            >
              Visit Our Store
            </h2>

            <div className="mt-10 space-y-8 text-lg text-[#6E5F5F]">

              <div>
                <h3 className="text-[#403434] font-semibold mb-2">
                  Address
                </h3>

                <p>
                  Hall Bazaar, Amritsar,
                  Punjab, India
                </p>
              </div>

              <div>
                <h3 className="text-[#403434] font-semibold mb-2">
                  Phone
                </h3>

                <p>
                  +91 78883 77610
                </p>
              </div>

              <div>
                <h3 className="text-[#403434] font-semibold mb-2">
                  Email
                </h3>

                <p>
                  punjabjewellers@email.com
                </p>
              </div>

              <div>
                <h3 className="text-[#403434] font-semibold mb-2">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/917888377610"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#B76E79] hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[40px] p-10 shadow-lg">

            <p className="uppercase tracking-[0.3em] text-[#B08D74] text-sm">
              Send Message
            </p>

            <h2
              className="text-4xl mt-5"
              style={{ fontFamily: "Playfair Display" }}
            >
              Luxury Assistance
            </h2>

            <form className="mt-10 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-full border border-[#E5D4CB] outline-none focus:border-[#B76E79]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-full border border-[#E5D4CB] outline-none focus:border-[#B76E79]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-full border border-[#E5D4CB] outline-none focus:border-[#B76E79]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-6 py-5 rounded-[30px] border border-[#E5D4CB] outline-none focus:border-[#B76E79] resize-none"
              ></textarea>

              <button
                type="submit"
                className="px-8 py-4 bg-[#B76E79] text-white rounded-full hover:bg-[#a85f6b] hover:scale-105 transition duration-300 shadow-lg"
              >

                Send Enquiry

              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );
}

export default ContactPage;