import Link from "next/link";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-9 pb-4 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* About Academy */}
        <div className="space-y-4 text-center md:text-left">
          {/* Centered Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/logo.jpeg"
              alt="Swaranjali Logo"
              width={150}
              height={90}
              className="rounded-l object-cover border-2 border-white shadow-lg hover:scale-105  hover:cursor-pointer transition duration-300"
            />
          </div>

          <h2 className="text-2xl font-bold">
            Swaranjali Sangeetha Kalaa Shaale (R)
          </h2>

          <p className="text-sm opacity-90">
            Empowering students through music since 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Disclaimer", link: "/" },
              { name: "Terms & Conditions", link: "/about" },
              { name: "Privacy Policy", link: "/course" },
              { name: "Copyright Notice", link: "/events" },
              { name: "Fee Structure", link: "/fees" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="relative hover:text-secondary transition duration-300 after:block after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 hover:cursor-pointer after:transition-transform after:origin-left"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Courses</h3>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Carnatic Music", link: "/courses/carnatic" },
              { name: "Sugama Sangeetha", link: "/courses/sugama" },
              { name: "Bhajans", link: "/courses/bhajans" },
              { name: "Harmonium", link: "/courses/harmonium" },
              { name: "Course Structure", link: "/courses/structure" },
              { name: "Batch Timings", link: "/courses/timings" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="relative hover:text-secondary transition duration-300 after:block after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="space-y-4 text-sm">
            <div className="flex gap-3 items-start hover:text-secondary transition duration-300">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                Swaranjali Sangeetha Kalaa Shaale (R)
                <br />
                Urva Marigudi Road
                <br />
                Mangalore – 575006
                <br />
                Karnataka, India
              </p>
            </div>

            <div className="flex gap-3 items-center hover:text-secondary transition duration-300">
              <FaPhoneAlt />
              <p>+91 90191 01127</p>
            </div>

            <div className="flex gap-3 items-center hover:text-secondary transition duration-300">
              <FaEnvelope />
              <p>swaranjalimusic@gmail.com</p>
            </div>

            <div className="flex gap-3 items-center group cursor-pointer">
              <FaWhatsapp className="group-hover:text-green-300 transition duration-300" />
              <a
                href="https://wa.me/919019101127"
                target="_blank"
                className="hover:text-green-300 transition duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-6 pt-4 max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-lg">
          <a
            href="#"
            className="hover:text-secondary hover:scale-110 transition duration-300"
          >
            <FaFacebook />
          </a>

          <a
            href="#"
            className="hover:text-secondary hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="hover:text-secondary hover:scale-110 transition duration-300"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-xs mt-3 opacity-80">
          Designed & Developed with ❤️ for Swaranjali Music Academy
        </div>
      </div>
    </footer>
  );
}
