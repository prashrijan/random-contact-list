import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-xl text-gray-300 text-center mb-12">
          Learn more about our mission, vision, and the team behind Finance
          Tracker.
        </p>

        {/* Introduction Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Who We Are</h2>
          <p className="text-gray-300 mb-4">
            Finance Tracker is a powerful tool designed to help individuals and
            businesses take control of their finances. We believe that financial
            freedom starts with understanding your spending, saving, and
            investing habits.
          </p>
          <p className="text-gray-300">
            Our mission is to provide an intuitive and user-friendly platform
            that empowers you to make smarter financial decisions and achieve
            your goals.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-300">
            At Finance Tracker, our mission is to simplify personal finance
            management for everyone. We aim to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>Help users track their expenses and income effortlessly.</li>
            <li>Provide actionable insights to improve financial health.</li>
            <li>Enable users to set and achieve their financial goals.</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-gray-700 h-48 w-48 mx-auto rounded-full flex items-center justify-center text-4xl mb-4">
                👨‍💻
              </div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-300">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-gray-700 h-48 w-48 mx-auto rounded-full flex items-center justify-center text-4xl mb-4">
                👩‍💻
              </div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-300">Lead Developer</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-gray-700 h-48 w-48 mx-auto rounded-full flex items-center justify-center text-4xl mb-4">
                🧑‍💻
              </div>
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-300">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
