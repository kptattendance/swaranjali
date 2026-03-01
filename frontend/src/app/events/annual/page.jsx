export default function AnnualPage() {
  return (
    <div className=" bg-accent py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-primary mb-12">
        Annual Day Celebration
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-primary">100+</h2>
          <p>Students Perform</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-primary">500+</h2>
          <p>Audience Members</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-primary">10+</h2>
          <p>Guest Artists</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-left max-w-4xl mx-auto space-y-2">
        <li>Beginner to Advanced Level Performances</li>
        <li>Solo and Group Presentations</li>
        <li>Guest Artist Performances</li>
        <li>Certificate Distribution Ceremony</li>
      </ul>
    </div>
  );
}
