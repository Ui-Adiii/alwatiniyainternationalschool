import {
  FaChalkboardTeacher,
  FaShieldAlt,
  FaBookOpen,
  FaLaptop,
  FaUserGraduate,
  FaHandsHelping,
} from "react-icons/fa";

const features = [
  {
    icon: FaChalkboardTeacher,
    title: "Qualified & Experienced Teachers",
    desc: "Our teachers are well-trained, experienced, and dedicated to guiding each child with care and attention.",
  },
  {
    icon: FaShieldAlt,
    title: "Safe & Secure Campus",
    desc: "The entire campus is monitored with CCTV surveillance, ensuring a safe and secure learning environment.",
  },
  {
    icon: FaBookOpen,
    title: "CBSE Pattern Curriculum",
    desc: "We follow a CBSE-based curriculum with a strong focus on conceptual learning and academic excellence.",
  },
  {
    icon: FaLaptop,
    title: "Computer & AI Learning",
    desc: "Early exposure to computer education and basic AI concepts to prepare students for the future.",
  },
  {
    icon: FaUserGraduate,
    title: "Personality Development",
    desc: "We focus on communication skills, confidence building, discipline, and overall personality growth.",
  },
  {
    icon: FaHandsHelping,
    title: "Islamic & Moral Education",
    desc: "Moral values and Islamic teachings are integrated into daily learning to build strong character.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r  from-green-700 to-green-800 text-white text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Our Features
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-95">
          Everything we provide to ensure quality education and holistic development.
        </p>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-5">
                  <Icon className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Extra Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Al-Wataniya International School?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe in nurturing young minds through a balanced approach that
            combines academic excellence, moral values, modern technology, and
            personalized care for every student.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Features;
