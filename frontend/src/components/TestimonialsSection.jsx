"use client";

export default function CourseSection() {
  const testimonials = [
    {
      name: "Ananya Rao",
      image: "/images/g4.png",
      message:
        "Learning Carnatic music here has transformed my confidence and stage presence.",
    },
    {
      name: "Meghana Shetty",
      image: "/images/g4.png",
      message:
        "The Guru’s personalized guidance helped me understand ragas deeply.",
    },
    {
      name: "Shravya Pai",
      image: "/images/g4.png",
      message:
        "Bhajan sessions are spiritually uplifting and beautifully structured.",
    },
    {
      name: "Keerthana Bhat",
      image: "/images/g4.png",
      message:
        "Harmonium classes improved my coordination and musical expression.",
    },
    {
      name: "Rithika Acharya",
      image: "/images/g4.png",
      message: "I gained immense confidence performing in public programs.",
    },
  ];

  return (
    <section className="py-20 bg-accent text-center overflow-hidden">
      <h2 className="text-4xl font-bold text-primary mb-12">
        What Our Students Say
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 slider-track">
          {/* Duplicate content for infinite effect */}
          {[...testimonials, ...testimonials].map((student, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white p-6 rounded-xl shadow-lg"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-20 h-20 mx-auto rounded-full object-cover border-1 border-primary mb-4"
              />

              <h3 className="text-lg font-semibold text-primary">
                {student.name}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                "{student.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
