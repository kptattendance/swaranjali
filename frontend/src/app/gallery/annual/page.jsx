export default function AnnualGalleryPage() {
  return (
    <div className="min-h-screen">
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/annual.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">
            Annual Day Highlights
          </h1>
        </div>
      </div>

      <div className="py-20 px-6 bg-white">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <img src="/images/annual1.jpg" className="rounded-xl shadow-lg" />
          <img src="/images/annual2.jpg" className="rounded-xl shadow-lg" />
          <img src="/images/annual3.jpg" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
}
