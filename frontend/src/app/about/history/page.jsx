export default function HistoryPage() {
  const timeline = [
    { year: "2010", event: "Academy Founded in Mangalore" },
    { year: "2013", event: "First Annual Day Celebration" },
    { year: "2016", event: "Students won District Level Competitions" },
    { year: "2019", event: "Performed in State Level Cultural Programs" },
    { year: "2023", event: "Expanded Student Strength & Online Classes" },
  ];

  return (
    <div className="min-h-screen bg-accent py-20 px-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Academy History
      </h1>

      <div className="max-w-4xl mx-auto relative border-l-4 border-primary pl-8 space-y-12">
        {timeline.map((item, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold text-primary">{item.year}</h2>
            <p className="mt-2 text-gray-700">{item.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
