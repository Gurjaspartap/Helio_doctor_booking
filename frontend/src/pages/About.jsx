import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <div className="about-us-container flex flex-col items-center p-10 bg-white relative overflow-hidden">
      <motion.h1
        className="text-6xl font-bold mb-6 text-center text-blue-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="text-lg mb-10 text-center max-w-3xl text-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to our platform! We are dedicated to connecting you with trusted medical professionals and providing valuable health information. Our goal is to improve your healthcare experience through innovation and accessibility.
      </motion.p>

      <motion.div
        className="mission-section mb-12"
      >
        <h2 className="text-5xl font-semibold mb-4 text-blue-800">Our Mission</h2>
        <p className="text-lg mb-6 text-center text-gray-600">
          To empower individuals with the information they need to make informed health decisions and to connect them with the best healthcare providers.
        </p>
      </motion.div>

      <motion.div
        className="values-section mb-12"
      >
        <h2 className="text-5xl font-semibold mb-4 text-blue-800">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
          <li>Compassion: We care for our patients and their families with empathy and respect.</li>
          <li>Innovation: We strive to provide the best solutions for our users through innovative technologies.</li>
          <li>Accessibility: We believe that quality healthcare should be accessible to everyone.</li>
        </ul>
      </motion.div>

      <motion.div
        className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {/* Team Member 1 */}
        <motion.div
          className="team-member bg-gray-100 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-bold text-2xl">Dr. John Doe</h3>
          <p className="text-gray-600">Chief Medical Officer</p>
        </motion.div>
        {/* Team Member 2 */}
        <motion.div
          className="team-member bg-gray-100 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-bold text-2xl">Jane Smith</h3>
          <p className="text-gray-600">Head of Operations</p>
        </motion.div>
        {/* Team Member 3 */}
        <motion.div
          className="team-member bg-gray-100 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-bold text-2xl">Alice Johnson</h3>
          <p className="text-gray-600">Marketing Director</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="testimonials mb-12"
      >
        <h2 className="text-5xl font-semibold mb-4 text-blue-800">What Our Users Say</h2>
        <div className="testimonial bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <p className="text-gray-600 italic">"This platform has changed the way I find healthcare. I can easily connect with doctors and get the information I need!"</p>
          <p className="font-bold mt-4">- Sarah Williams</p>
        </div>
      </motion.div>


    </div>
  );
}

export default AboutUs;
