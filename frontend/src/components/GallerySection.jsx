import Link from "next/link";

export default function GallerySection() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">Gallery</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {["1.jpeg", "2.jpeg", "3.jpeg", "5.jpeg"].map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-lg">
            <Link key={index} href="\gallery">
              <img
                src={`/images/${img}`}
                alt="Gallery"
                className="hover:scale-110 transition duration-500"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
