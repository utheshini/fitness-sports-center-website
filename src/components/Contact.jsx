import { useState } from "react";
import { RiTelegram2Line } from "react-icons/ri";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  // Separate states for each field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-lightBg text-darkBg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
          <p className="text-sm opacity-70 mt-2">
            Get in touch with us for any inquiries or membership related
            questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Details */}
          <div className="space-y-6">

            <div className="flex items-start gap-4 text-lg">
              <FaMapMarkerAlt className="text-[var(--color-primary)] mt-1 text-xl" />
              <p className="text-lg">123, A.D. Street, Colombo, Sri Lanka</p>
            </div>

            <div className="flex items-start gap-4 text-lg">
              <FaPhoneAlt className="text-[var(--color-primary)] mt-1 text-xl" />
              <p className="text-lg">+94 77 123 4567</p>
            </div>

            <div className="flex items-start gap-4 text-lg">
              <FaEnvelope className="text-[var(--color-primary)] mt-1 text-xl" />
              <p className="text-lg">info@fitness.com</p>
            </div>

          </div>
          
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-6 rounded-xl shadow-md bg-cardBg"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 rounded-md outline-none border transition ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } bg-cardBg text-darkBg`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-md outline-none border transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } bg-cardBg text-darkBg`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="4"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full px-4 py-3 rounded-md outline-none border resize-none transition ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } bg-cardBg text-darkBg`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button with Telegram */}
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2 px-4 py-3 hover:bg-primaryDark transition cursor-pointer"
            >
              <RiTelegram2Line className="text-xl" />
              <span>Send Message</span>
            </button>

            {/* Success Message */}
            {success && (
              <p className="text-green-500 text-sm text-center">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
