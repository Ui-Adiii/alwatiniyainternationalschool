import science from "../assets/images/gallery/science-exhibition.jpg";
import nutrition from "../assets/images/gallery/nutrition-awareness.jpg";
import community from "../assets/images/gallery/community-engagement.jpg";
import classroom from "../assets/images/gallery/classroom-environment.jpg";
import Heading from "../components/Heading";
import LazyImage from "../components/LazyImage";
import GalleryImageCard from "../components/GalleryImageCard";

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
      {heading &&
        <Heading title={"School Gallery"} subtitle={"Discover moments that reflect learning, growth, and campus life at AL-Wataniya International School."} />
        
      }
        

          {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
           <GalleryImageCard key={index} src={item.src} title={item.title} desc={item.desc} />
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
