import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
export default function TestimonialSection() {
  return (
    <section className="py-20 bg-accent text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">
        What Our Students Say
      </h2>

      <div className="max-w-3xl mx-auto px-6">
        <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop={true}>
          {[
            "Excellent teaching with clear understanding of classical basics.",
            "Very supportive and encouraging learning environment.",
            "Best place in Mangalore to learn Carnatic music.",
          ].map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 italic">"{testimonial}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
