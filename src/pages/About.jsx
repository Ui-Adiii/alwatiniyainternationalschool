import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaEye,
  FaAward,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import Heading from "../components/Heading";
import MisionVisionCard from "../components/MisionVisionCard";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Heading title={"About Al-Wataniya"} subtitle={" Holistic Education in an Islamic Environment"} />
    

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
    discipline, character building, and overall personality development
    in a safe, caring, and value-based environment.
  </p>

  {/* Leadership */}
  <div className="pt-6 border-t border-gray-200">
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
      School Leadership
    </h3>

    <p>
      <span className="font-semibold text-gray-900">
        Abdul Kadir
      </span>{" "}
      — Director, Senior Research Scholar cum Assistant Professor at
      Ranchi University, Ranchi.
    </p>

    <p>
      <span className="font-semibold text-gray-900">
        Md Zeeshan Hasmi
      </span>{" "}
      — Principal, Research Scholar at Vinoba Bhave University.
    </p>
  </div>
</div>

      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Mission & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MisionVisionCard title={'Our Mission'} Icon={FaBullseye} description={'To provide holistic education combining academics, values,'} />
            <MisionVisionCard title={'Our Vision'} Icon={FaEye} description={'To shape responsible, confident, and value-driven citizens.'} />
            <MisionVisionCard title={'Excellence'} Icon={FaAward} description={'High academic standards with continuous improvement.'} />
            <MisionVisionCard title={'Community'} Icon={FaUsers} description={'Growth, care, and success together.'} />
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default About;
