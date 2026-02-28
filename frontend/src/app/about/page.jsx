import GuruPage from "./guru/page";
import HistoryPage from "./history/page";
import VisionPage from "./vision/page";
import MethodologyPage from "./methodology/page";
import RecognitionPage from "./recognition/page";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-accent py-20 px-6 text-center">
      <h1 className="text-5xl font-bold text-primary mb-12">
        About Swaranjali
      </h1>

      <GuruPage />
      <HistoryPage />
      <VisionPage />
      <MethodologyPage />
      <RecognitionPage />
    </div>
  );
}
