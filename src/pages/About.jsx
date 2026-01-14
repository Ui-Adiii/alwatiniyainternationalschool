import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaEye,
  FaAward,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            About Al-Wataniya
          </h1>
          <p className="text-lg sm:text-xl opacity-95">
            Holistic Education in an Islamic Environment
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-lg leading-relaxed">
          <p>
            <span className="font-semibold text-green-600">
              Al-Wataniya International School
            </span>{" "}
            is a CBSE-pattern, English-medium institution dedicated to nurturing
            young minds through quality education, moral values, and Islamic
            teachings.
          </p>

          <p>
            We believe education is not only about academics, but also about
            discipline, character building, and overall personality
            development in a safe, caring, and value-based environment.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Mission & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mission */}
            <div className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <FaBullseye className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600">
                To provide holistic education combining academics, values,
                and faith.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <FaEye className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-sm text-gray-600">
                To shape responsible, confident, and value-driven citizens.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <FaAward className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-gray-600">
                High academic standards with continuous improvement.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <FaUsers className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-sm text-gray-600">
                Growth, care, and success together.
              </p>
            </div>
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default About;
