export default function GuruSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-6">
            About the Guru
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Swaranjali Sangeetha Kalaa Shaale is dedicated to preserving and
            promoting the rich tradition of Carnatic music. With years of
            experience in teaching and performance, the Guru provides
            personalized guidance to nurture every student’s musical journey.
          </p>
        </div>

        <div>
          <img
            src="/images/guru2.jpeg"
            alt="Guru"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
