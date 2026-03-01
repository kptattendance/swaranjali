export default function VisionPage() {
  return (
    <div className=" bg-white py-20 px-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Vision & Mission
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-accent p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Vision</h2>
          <p>
            To preserve and promote Carnatic music tradition by nurturing
            disciplined and confident performers.
          </p>
        </div>

        <div className="bg-accent p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Mission</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide structured classical music training</li>
            <li>Encourage public performances</li>
            <li>Develop discipline and cultural awareness</li>
            <li>Support competition participation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
