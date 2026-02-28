export default function TimingsPage() {
  return (
    <section className="bg-white py-16 px-6 mb-16 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-primary mb-6">
        Batch Timings
      </h2>

      <ul className="list-disc list-inside space-y-2 text-left max-w-4xl mx-auto">
        <li>Weekday Batches – 4:30 PM to 6:30 PM</li>
        <li>Weekend Batches – Saturday & Sunday</li>
        <li>Individual Classes Available</li>
        <li>Online Classes (On Request)</li>
      </ul>
    </section>
  );
}