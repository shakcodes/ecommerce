import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  const [openSection, setOpenSection] = useState(null);

  // Function to toggle sections
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 mt-5 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 h-40 pt-14 bg-gray-800 text-white">
        About Us
      </h1>

      <div className="space-y-8">
        {/* Who We Are Section */}
        <div>
          <h2
            className="text-2xl font-semibold mb-2 cursor-pointer flex items-center"
            onClick={() => toggleSection("whoWeAre")}
          >
            Who We Are
            <FaArrowRight
              className={`ml-2 transition-transform duration-300 hover:rotate-90 ${
                openSection === "whoWeAre" ? "rotate-90 hover:rotate-0" : ""
              }`}
            />
          </h2>
          {openSection === "whoWeAre" && (
            <p className="text-gray-700 bg-slate-600 h-22 text-justify rounded-xl p-2 text-xl text-white">
              Welcome to <strong>MyLogo</strong>, your one-stop destination for
              high-quality products at unbeatable prices. We are passionate
              about delivering the best shopping experience, combining
              convenience, affordability, and exceptional customer service.
            </p>
          )}
        </div>

        {/* Our Mission Section */}
        <div>
          <h2
            className="text-2xl font-semibold mb-2 cursor-pointer flex items-center"
            onClick={() => toggleSection("mission")}
          >
            Our Mission
            <FaArrowRight
              className={`ml-2 transition-transform duration-300 hover:rotate-90 ${
                openSection === "mission" ? "rotate-90 hover:rotate-0" : ""
              }`}
            />
          </h2>
          {openSection === "mission" && (
            <p className="text-gray-700 bg-slate-600 h-22 text-justify rounded-xl p-2 text-xl text-white">
              Our mission is to make online shopping easy, reliable, and
              enjoyable. We strive to offer a wide range of top-quality products
              while ensuring a seamless shopping journey from browsing to
              checkout.
            </p>
          )}
        </div>

        {/* Our Commitment Section */}
        <div>
          <h2
            className="text-2xl font-semibold mb-2 cursor-pointer flex items-center"
            onClick={() => toggleSection("commitment")}
          >
            Our Commitment
            <FaArrowRight
              className={`ml-2 transition-transform duration-300 hover:rotate-90 ${
                openSection === "commitment" ? "rotate-90 hover:rotate-0" : ""
              }`}
            />
          </h2>
          {openSection === "commitment" && (
            <p className="text-gray-700 bg-slate-600 h-22 text-justify rounded-xl p-2 text-xl text-white">
              At <strong>MyLogo</strong>, we value our customers and aim to
              provide a hassle-free shopping experience. Whether you're looking
              for fashion, electronics, home essentials, or unique gifts, we've
              got you covered.
            </p>
          )}
        </div>

        {/* Why Choose Us? */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Premium Quality:</strong> We handpick every product to
              ensure superior quality.
            </li>
            <li>
              <strong>Affordable Prices:</strong> Get the best deals without
              compromising on quality.
            </li>
            <li>
              <strong>Fast & Secure Shipping:</strong> Reliable delivery with
              real-time tracking.
            </li>
            <li>
              <strong>24/7 Customer Support:</strong> Your satisfaction is our
              priority.
            </li>
            <li>
              <strong>Safe & Secure Payments:</strong> Multiple payment options
              with 100% security.
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Stay Connected</h2>
          <p className="text-gray-700">
            Join our community and stay updated with the latest trends,
            exclusive deals, and exciting offers. Follow us on social media and
            subscribe to our newsletter for special discounts.
          </p>
          <div className="mt-4 text-gray-800">
            <p className="flex flex-wrap">
              <IoMdMail className="mt-1 pr-1 text-xl" />{" "}
              <strong>Email:</strong> mylogo@gmail.com
            </p>
            <p className="flex flex-wrap">
              <BsFillTelephoneFill className="mt-1 pr-1 text-xl" />{" "}
              <strong>Contact:</strong> 00134684756
            </p>
            <p className="flex flex-wrap">
              <MdLocationPin className="mt-1 pr-1 text-xl" />{" "}
              <strong>Location:</strong> Shastri Park, Delhi
            </p>
          </div>
          <p className="mt-4 text-gray-700 font-semibold">
            We are thrilled to have you here and look forward to serving you!
            Happy Shopping!
          </p>
        </div>
      </div>
    </div>
  );
}
