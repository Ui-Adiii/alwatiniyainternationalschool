import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Heading from "../components/Heading";
import ContactUsCard from "../components/ContactUsCard";

const Enquire = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <Heading
        title={"Enquire About Student"}
        subtitle={
          "For any queries regarding students, please submit the form with the student’s name, class, mobile number, and address. Our team will assist you shortly."
        }
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Student Query
            </h2>
            <p className="text-gray-600 text-lg">
              Submit your query related to a student and we’ll get back to you
              shortly.
            </p>
          </div>

          <form className="bg-white border rounded-xl shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div>
              <label
                htmlFor="studentName"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Student Name
              </label>
              <input
                id="studentName"
                type="text"
                placeholder="Enter student name"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Class / Section */}
            <div>
              <label
                htmlFor="classSection"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Class / Section
              </label>
              <input
                id="classSection"
                type="text"
                placeholder="e.g. Class 8 - A"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label
                htmlFor="mobile"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Parent / Guardian Mobile Number
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="Enter mobile number"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Enter address"
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Query Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="query"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Query Details
              </label>
              <textarea
                id="query"
                rows={5}
                placeholder="Write your query about the student here..."
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition"
              >
                <FaPaperPlane />
                Submit Query
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Enquire;
