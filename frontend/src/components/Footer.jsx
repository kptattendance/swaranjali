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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* About Academy */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Link href="/" className="flex flex-col items-center space-y-3">
            <img
              src="/logo.jpeg"
              alt="Swaranjali Logo"
              width={120}
              height={120}
              className="mx-auto rounded-lg object-cover border-2 border-white shadow-lg hover:scale-105 transition duration-300"
            />

            <h2 className="text-xl md:text-2xl font-bold leading-snug">
              Swaranjali Sangeetha{" "}
              <span className="text-secondary">Kalaa Shaale (R) </span>
            </h2>
          </Link>

          <p className="text-sm opacity-90 max-w-xs">
            Empowering students through music since 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Disclaimer", link: "/disclaimer" },
              { name: "Terms & Conditions", link: "/terms" },
              { name: "Privacy Policy", link: "/privacy" },
              { name: "Copyright Notice", link: "/copyright" },
              { name: "Fee Structure", link: "/fees" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="relative hover:text-secondary transition duration-300 after:block after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center md:after:origin-left"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Our Courses</h3>

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
                  className="relative hover:text-secondary transition duration-300 after:block after:h-[2px] after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center md:after:origin-left"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Contact Information
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-center md:items-start hover:text-secondary transition duration-300">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                Swaranjali Sangeetha Kalaa Shaale (R)
                <br />
                Shreyas, 1st Floor,
                <br />
                Urva Marigudi Road,
                <br />
                Mangalore – 575006,
                <br />
                Karnataka, India
              </p>
            </div>

            <div className="flex gap-2 md:gap-3 items-center justify-center md:justify-start hover:text-secondary transition duration-300">
              <FaPhoneAlt />
              <p>+91 90191 01127 / 9343573134</p>
            </div>

            <div className="flex gap-2 md:gap-3 items-center justify-center md:justify-start hover:text-secondary transition duration-300">
              <FaEnvelope />
              <p>sangeethacclass@gmail.com</p>
            </div>

            <div className="flex gap-2 md:gap-3 items-center justify-center md:justify-start group cursor-pointer">
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
          <Link
            href="https://swasyaha.in"
            target="_blank"
            className="hover:text-secondary hover:underline cursor-pointer transition"
          >
            Developed & Maintained by Swasyaha Solutions
          </Link>
        </div>
      </div>
    </footer>
  );
}
