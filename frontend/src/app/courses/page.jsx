import CarnaticPage from "./carnatic/page";
import SugamaPage from "./sugama/page";
import BhajansPage from "./bhajans/page";
import HarmoniumPage from "./harmonium/page";
import StructurePage from "./structure/page";
import FeesPage from "./fees/page";
import TimingsPage from "./timings/page";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-accent py-20 px-6 text-center">
      <h1 className="text-5xl font-bold text-primary mb-12">Our Courses</h1>

      <CarnaticPage />
      <SugamaPage />
      <BhajansPage />
      <HarmoniumPage />
      <StructurePage />
      <FeesPage />
      <TimingsPage />
    </div>
  );
}
