import Link from "next/link";

export default function GuruSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h2 className="text-4xl font-bold text-primary mb-6">
            About the Guru
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Swaranjali Sangeetha Kalaa Shaale is dedicated to preserving and
            promoting the rich tradition of Carnatic music. With years of
            experience in teaching and performance, the Guru provides
            personalized guidance to nurture every student’s musical journey.
          </p>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="relative w-full max-w-sm h-[480px] flex items-end justify-center">
            {/* Head Halo */}

            <div className="absolute top-[20px] w-[320px] h-[320px] head-halo"></div>

            <img
              src="/images/g4.png"
              alt="Guru"
              className="h-full object-contain relative z-10 border-1 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
