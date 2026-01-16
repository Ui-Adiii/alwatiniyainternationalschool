import { FaPlay } from "react-icons/fa";

import video1 from "../assets/videos/gallery/video1.mov";
import video2 from "../assets/videos/gallery/video2.webm";
import video3 from "../assets/videos/gallery/video3.webm";
import video4 from "../assets/videos/gallery/video4.webm";
import video5 from "../assets/videos/gallery/video5.webm";
import video6 from "../assets/videos/gallery/video6.webm";

const galleryVideos = [video1, video2, video3, video4, video5, video6];

const GalleryVideo = () => {
  return (
    <>
    <section className="py-20 bg-gradient-to-r  from-green-700 to-green-800 text-white text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Campus Gallery
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-95">
          Experience real moments from classrooms, activities, and student life at
          AL-Wataniya International School.
        </p>
      </section>
    <section className="py-16 ">
      
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryVideos.map((video, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Video */}
            <video
              src={video}
              playsinline 
              controls
              alt="Gallery Video"
              preload="metadata"
              className="w-full h-56 object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <FaPlay className="text-white text-3xl opacity-80" />
            </div>
          </div>
        ))}
      </div>
      </section>
    </>
  );
};

export default GalleryVideo;
