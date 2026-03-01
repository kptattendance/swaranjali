export default function VideosPage() {
  const videos = [
    "https://www.youtube.com/embed/VIDEO_ID_1",
    "https://www.youtube.com/embed/VIDEO_ID_2",
    "https://www.youtube.com/embed/VIDEO_ID_3",
  ];

  return (
    <div className=" bg-accent py-24 px-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Video Gallery
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {videos.map((link, index) => (
          <div
            key={index}
            className="aspect-video rounded-xl overflow-hidden shadow-xl"
          >
            <iframe
              src={link}
              title="YouTube video"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
