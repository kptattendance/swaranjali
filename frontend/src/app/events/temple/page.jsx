export default function TemplePage() {
  return (
    <div className="min-h-screen">
      <div
        className="h-[70vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/temple.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Temple Concerts</h1>
        </div>
      </div>

      <div className="py-20 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Temple concerts form the spiritual foundation of our academy. Students
          present devotional kritis and bhajans during festivals like Navaratri
          and Rama Navami.
        </p>
      </div>

      <ul className="list-disc list-inside text-left max-w-4xl mx-auto space-y-2">
        <li>Navaratri Special Performances</li>
        <li>Krishna Janmashtami Programs</li>
        <li>Rama Navami Celebrations</li>
        <li>Annual Temple Utsavas</li>
      </ul>
    </div>
  );
}
