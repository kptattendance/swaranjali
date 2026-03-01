export default function CertificatesPage() {
  const certificates = [
    "cert1.jpg",
    "cert2.jpg",
    "cert3.jpg",
    "cert4.jpg",
    "cert5.jpg",
    "cert6.jpg",
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
            <img src={`/1.png`} alt="Certificate" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
