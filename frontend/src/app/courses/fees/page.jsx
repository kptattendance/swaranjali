export default function FeesPage() {
  return (
    <section className="bg-white py-16 px-6 mb-16 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-primary mb-6">Fees Structure</h2>

      <p className="mb-4">
        Fees are affordable and structured based on level and batch type.
      </p>

      <ul className="list-disc list-inside space-y-2 text-left max-w-4xl mx-auto">
        <li>Beginner Level – ₹XXXX per month</li>
        <li>Intermediate Level – ₹XXXX per month</li>
        <li>Advanced Level – ₹XXXX per month</li>
        <li>Harmonium – ₹XXXX per month</li>
        <li>Special workshop fees vary based on duration</li>
      </ul>
    </section>
  );
}
