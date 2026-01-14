import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-95">
          We are here to help you with admissions and any school-related
          queries.
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-4">
              <FaPhoneAlt className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Phone Support</h3>
            <p className="font-medium">9279809145 , 6201543640</p>
            <p className="text-sm text-gray-500 mt-1">
              Monday – Saturday | 9:00 AM – 12:30 PM
            </p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-4">
              <FaMapMarkerAlt className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-1">School Address</h3>
            <p className="text-sm leading-relaxed">
              Millat Colony, Kanke, Ranchi – 834006
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {/* Landmark: Animal Hospital */}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-4">
              <FaEnvelope className="text-green-600 text-2xl" />
            </div>

            <h3 className="text-xl font-semibold mb-1">Email</h3>

            <p className="text-sm leading-relaxed">info@alwataniya.edu</p>

            <p className="text-sm text-gray-500 mt-1">
              For admissions & general inquiries
            </p>
          </div>
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
