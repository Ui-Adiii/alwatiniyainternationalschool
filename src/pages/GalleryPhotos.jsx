import science from "../assets/images/gallery/science-exhibition.jpg";
import nutrition from "../assets/images/gallery/nutrition-awareness.jpg";
import community from "../assets/images/gallery/community-engagement.jpg";
import classroom from "../assets/images/gallery/classroom-environment.jpg";

const galleryItems = [
  {
    src: science,
    title: "Science Exhibition",
    desc: "Students presenting hands-on science models like photosynthesis, encouraging curiosity and practical learning.",
  },
  {
    src: nutrition,
    title: "Nutrition Awareness Program",
    desc: "Interactive models explaining vitamins, minerals, and balanced diet to promote healthy living.",
  },
  {
    src: community,
    title: "Community Learning Event",
    desc: "Students confidently explaining projects to parents and visitors, building communication skills.",
  },
  {
    src: classroom,
    title: "Structured Classroom Learning",
    desc: "A disciplined and supportive classroom environment focused on foundational education.",
  },
];


const GalleryPhoto = ({heading=false}) => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      {heading && <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          School Gallery
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-95">
          Discover moments that reflect learning, growth, and campus life at
          Al-Wataniya International School.
        </p>
      </section>}

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-56 object-cover object-center hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      {/* <section className="py-12 bg-gray-50 text-center">
        <p className="text-gray-600 text-lg">
          Every moment captured reflects our commitment to quality education and values.
        </p>
      </section> */}

    </div>
  );
};

export default GalleryPhoto;
