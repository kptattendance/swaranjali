import Link from "next/link";

export default function GallerySection() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">Gallery</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg"].map(
          (img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <Link key={index} href="\gallery">
                <img
                  src="/1.png"
                  alt="Gallery"
                  className="hover:scale-110 transition duration-500"
                />
              </Link>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
