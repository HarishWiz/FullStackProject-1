import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleOutline, IoTimeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white border-border rounded-md p-5 space-y-3 md:border md:shadow-md">
    <h2 className="text-xl font-semibold text-blackprimaryprimary flex items-center gap-2">
      {icon}
      {title}
    </h2>
    {children}
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Process form data here
  };

  const address = ["123 Sweet Street", "Gandhi Nagar, Mumbai", "Chennai 2000001"];
  const phones = ["+91 98765 43210", "+91 98765 43211"];
  const emails = ["info@sweetshop.com", "orders@sweetshop.com"];
  const hours = [
    { day: "Mon - Sat", time: "9:00 AM - 9:00 PM" },
    { day: "Sunday", time: "10:00 AM - 8:00 PM" },
    { day: "Festivals", time: "8:00 AM - 10:00 PM" },
  ];

  const faqs = [
    {
      q: "What are your delivery areas?",
      a: "We deliver across Mumbai and surrounding areas. Free delivery for orders above ₹500.",
    },
    {
      q: "How fresh are your sweets?",
      a: "All our sweets are made fresh daily. We guarantee freshness and quality in every order.",
    },
    {
      q: "Do you accept bulk orders?",
      a: "Yes, we accept bulk orders for weddings, festivals, and corporate events. Please contact us 48 hours in advance.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept cash on delivery, UPI, credit/debit cards, and net banking.",
    },
  ];

  const inputFields = [
    { label: "First Name", name: "firstName", type: "text", placeholder: "Enter your first name", required: true },
    { label: "Last Name", name: "lastName", type: "text", placeholder: "Enter your last name", required: true },
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email", required: true },
    { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number" },
    { label: "Subject", name: "subject", type: "text", placeholder: "Enter your subject", required: true },
    { label: "Message", name: "message", type: "textarea", placeholder: "Tell us more about your inquiry...", required: true },
  ];

  return (
    <div className="w-full px-4 md:px-10 py-16 bg-gray-50 space-y-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold text-blackprimary">Get in Touch</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you. Send us a message!</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side */}
        <div className="w-full lg:w-[35%] space-y-5">
          <InfoCard icon={<FaMapMarkerAlt className="text-primary" />} title="Visit Our Store">
            <div className="text-blacksecondary text-sm leading-6">
              {address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <iframe
              title="Map Location"
              src="https://maps.google.com/maps?q=13.0827,80.2707&z=14&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </InfoCard>

          <InfoCard icon={<FaPhoneAlt className="text-primary" />} title="Call Us">
            <div className="text-blacksecondary text-sm leading-6 space-y-1 flex flex-col">
              {phones.map((phone, i) => (
                <a key={i} href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              ))}
            </div>
            <button className="w-full flex items-center justify-center gap-2 text-sm px-6 py-2 rounded-md bg-[#24c960] hover:bg-[#16a34a] text-white">
              <IoChatbubbleOutline className="text-lg" />
              <span>WhatsApp Chat</span>
            </button>
          </InfoCard>

          <InfoCard icon={<CiMail className="text-primary" />} title="Email Us">
            <div className="text-blacksecondary text-sm leading-6 space-y-1 flex flex-col">
              {emails.map((mail, i) => (
                <a key={i} href={`mailto:${mail}`}>{mail}</a>
              ))}
            </div>
          </InfoCard>

          <InfoCard icon={<IoTimeOutline className="text-primary" />} title="Store Hours">
            <div className="text-sm text-blacksecondary space-y-2">
              {hours.map((h, i) => (
                <div className="flex justify-between" key={i}>
                  <span>{h.day}</span>
                  <span className="text-blackprimary">{h.time}</span>
                </div>
              ))}
            </div>
          </InfoCard>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[65%] space-y-6">
          <form className="bg-white border-border rounded-md p-5 space-y-4 md:border md:shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold text-blackprimary">Send us a Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inputFields.slice(0, 4).map((field) => (
                <div key={field.name} className="space-y-1">
                  <label className="text-sm text-blacksecondary font-medium">
                    {field.label} {field.required && "*"}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black"
                  />
                </div>
              ))}
            </div>
            {inputFields.slice(4).map((field) => (
              <div key={field.name} className="space-y-1">
                <label className="text-sm text-blacksecondary font-medium">
                  {field.label} {field.required && "*"}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required={field.required}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black"
                  />
                )}
              </div>
            ))}
            <button type="submit" className="w-full px-6 py-2 bg-primary hover:bg-primaryhover text-white rounded-md">
              Send Message
            </button>
          </form>

          <div className="bg-white border border-border rounded-md p-5 space-y-4 md:border md:shadow-md">
            <h2 className="text-xl font-semibold text-blackprimary">Frequently Asked Questions</h2>
            <div className="space-y-3 text-blacksecondary text-sm">
              {faqs.map((item, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-blackprimary">{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;