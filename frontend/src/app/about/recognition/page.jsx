export default function RecognitionPage() {
  const certificates = ["cert1.jpg", "cert2.jpg", "cert3.jpg", "cert4.jpg"];

  return (
    <div className=" bg-accent py-20 px-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Recognition & Certificates
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
            <img src="\1.png" alt="Certificate" className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
