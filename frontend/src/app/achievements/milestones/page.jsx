export default function MilestonesPage() {
  return (
    <div className=" bg-gradient-to-r from-primary to-black text-white py-24 px-6 text-center">
      <h1 className="text-4xl font-bold mb-20">Performance Milestones</h1>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        <div>
          <h2 className="text-5xl font-bold text-secondary">500+</h2>
          <p>Stage Performances</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-secondary">300+</h2>
          <p>Students Trained</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-secondary">50+</h2>
          <p>Awards Won</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-secondary">15+</h2>
          <p>Years of Excellence</p>
        </div>
      </div>
    </div>
  );
}
