import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Heading from "../components/Heading";
import ContactUsCard from "../components/ContactUsCard";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <Heading
        title={"Contact Us"}
        subtitle={
          "We are here to help you with admissions and any school-related queries."
        }
      />

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <ContactUsCard
            Icon={FaPhoneAlt}
            title={"Phone Support"}
            description={"9279809145 , 6201543640"}
            sub={"Monday – Saturday | 9:00 AM – 12:30 PM"}
          />
          <ContactUsCard
            Icon={FaMapMarkerAlt}
            title={"School Address"}
            sub={"Millat Colony, Kanke, Ranchi – 834006"}
          />
          <ContactUsCard
            Icon={FaEnvelope}
            title={"Email"}
            description={"info@alwataniya.edu"}
            sub={"For admissions & general inquiries"}
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form and we’ll contact you shortly.
            </p>
          </div>

          <form className="bg-white border rounded-xl shadow-sm p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <textarea
              rows={5}
              placeholder="Write your message here..."
              required
              className="md:col-span-2 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-50">
        <div className="flex items-center justify-center gap-3 text-gray-700">
          <FaClock className="text-green-600 text-xl" />
          <p className="text-lg font-medium">
            Office Hours: Monday – Saturday | 9:00 AM – 12:30 PM
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
