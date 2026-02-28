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
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* About Academy */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Swaranjali Sangeetha Kalaa Shaale (R)
          </h2>

          <p className="text-sm leading-relaxed">
            Swaranjali Sangeetha Kalaa Shaale is dedicated to preserving and
            promoting the rich tradition of Carnatic music. The academy provides
            structured training in Carnatic Vocal, Sugama Sangeetha, Bhajans,
            and Harmonium with strong emphasis on discipline, cultural values,
            and stage excellence.
          </p>

          <p className="mt-4 text-sm">
            Empowering students through music since 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Disclaimer</Link>
            </li>
            <li>
              <Link href="/about">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/courses">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/events">Copyright Notice</Link>
            </li>
            <li>
              <Link href="/events">Fee Structure</Link>
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Courses</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/courses/carnatic">Carnatic Music</Link>
            </li>
            <li>
              <Link href="/courses/sugama">Sugama Sangeetha</Link>
            </li>
            <li>
              <Link href="/courses/bhajans">Bhajans</Link>
            </li>
            <li>
              <Link href="/courses/harmonium">Harmonium</Link>
            </li>
            <li>
              <Link href="/courses/structure">Course Structure</Link>
            </li>
            <li>
              <Link href="/courses/timings">Batch Timings</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="space-y-4 text-sm">
            <div className="flex gap-3 items-start">
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

            <div className="flex gap-3 items-center">
              <FaPhoneAlt />
              <p>+91 90191 01127</p>
            </div>

            <div className="flex gap-3 items-center">
              <FaEnvelope />
              <p>swaranjalimusic@gmail.com</p>
            </div>

            <div className="flex gap-3 items-center">
              <FaWhatsapp />
              <a href="https://wa.me/919019101127" target="_blank">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-3 pt-10 max-w-7xl mx-auto">
        {/* Legal Section */}
        <div className="text-xs leading-relaxed space-y-2"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-1 text-xl">
          <a href="#" className="hover:text-secondary">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-secondary">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-secondary">
            <FaYoutube />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-xs mt-2 opacity-80">
          Designed & Developed with ❤️ for Swaranjali Music Academy
        </div>
      </div>
    </footer>
  );
}
