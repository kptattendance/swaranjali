export default function CertificatesPage() {
  const certificates = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/7.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
  ];

  return (
    <div className=" bg-white py-24 px-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Certificates & Recognition
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-xl hover:scale-105 transition"
          >
            <img src={cert} alt="Certificate" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
