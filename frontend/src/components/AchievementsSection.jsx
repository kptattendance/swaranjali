export default function AchievementsSection() {
  const achievements = [
    "1st Prize – District Level Carnatic Competition",
    "Students performed on All India Radio",
    "State Level Bhajan Competition Winners",
    "Participation in National Youth Festival",
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">
        Achievements
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-accent p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <p className="text-lg font-medium text-gray-800">
              🏆 {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}