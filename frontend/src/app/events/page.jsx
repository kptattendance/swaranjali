import PastProgramsPage from "./past/page";
import OutsidePage from "./outside/page";
import TemplePage from "./temple/page";
import AnnualPage from "./annual/page";
import WorkshopsPage from "./workshops/page";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-accent py-20 px-6 text-center">
      <h1 className="text-5xl font-bold text-primary mb-12">
        Events & Performances
      </h1>

      <PastProgramsPage />
      <OutsidePage />
      <TemplePage />
      <AnnualPage />
      <WorkshopsPage />
    </div>
  );
}
