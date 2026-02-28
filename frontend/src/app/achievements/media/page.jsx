export default function MediaPage() {
  return (
    <div className="min-h-screen bg-accent py-24 px-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Media Coverage
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src="/1.png" className="rounded-xl shadow-xl" />

        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Featured in Local Newspaper
          </h2>
          <p className="text-gray-700">
            Swaranjali students were featured in regional newspapers for their
            outstanding performance in the State Cultural Festival.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Television & Radio Performances
          </h2>
          <p className="text-gray-700">
            Selected students performed on All India Radio and local television
            channels showcasing Carnatic compositions.
          </p>
        </div>

        <img src="/1.png" className="rounded-xl shadow-xl" />
      </div>
    </div>
  );
}
