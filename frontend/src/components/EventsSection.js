"use client";

import { useState } from "react";

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "Navaratri Special Concert",
      date: "October 2025",
      venue: "Sri Krishna Temple, Mangalore",
      image: "/images/event1.jpg",
      description:
        "Students performed classical Carnatic compositions during Navaratri celebrations.",
    },
    {
      title: "Annual Day Celebration",
      date: "August 2025",
      venue: "Town Hall, Mangalore",
      image: "/images/event2.jpg",
      description:
        "Grand annual performance showcasing students across all levels.",
    },
  ];

  return (
    <section className="py-20 bg-accent text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">
        Events & Performances
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {events.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelectedEvent(event)}
            className="bg-white rounded-xl shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-t-xl h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">
                {event.title}
              </h3>
              <p className="text-gray-600 mt-2">{event.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-4 text-xl font-bold"
            >
              ×
            </button>

            <img src={selectedEvent.image} alt="" className="rounded-lg mb-4" />

            <h3 className="text-2xl font-bold text-primary">
              {selectedEvent.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {selectedEvent.date} | {selectedEvent.venue}
            </p>

            <p className="mt-4 text-gray-700">{selectedEvent.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}
