import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white text-gray-700 py-10 mt-16'>
      <div className='container mx-auto px-4 md:px-10 lg:px-16'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row justify-between items-start gap-8 border-b border-gray-200 pb-8'>
          {/* About Us Section */}
          <div className='text-center md:text-left'>
            <h2 className='text-xl font-semibold mb-3 text-primary'>About Us</h2>
            <p className='text-sm text-gray-500'>
              We offer a seamless experience to book appointments with over 100+ trusted doctors.
            </p>
          </div>

          {/* Links Section */}
          <div className='flex flex-col md:flex-row gap-8'>
            <div>
              <h3 className='text-lg font-medium mb-3 text-primary'>Quick Links</h3>
              <ul className='space-y-2 text-sm'>
                <li><a href='#' className='hover:text-primary transition duration-300'>Home</a></li>
                <li><a href='#' className='hover:text-primary transition duration-300'>Doctors</a></li>
                <li><a href='#' className='hover:text-primary transition duration-300'>Services</a></li>
                <li><a href='#' className='hover:text-primary transition duration-300'>Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-medium mb-3 text-primary'>Support</h3>
              <ul className='space-y-2 text-sm'>
                <li><a href='#' className='hover:text-primary transition duration-300'>FAQs</a></li>
                <li><a href='#' className='hover:text-primary transition duration-300'>Privacy Policy</a></li>
                <li><a href='#' className='hover:text-primary transition duration-300'>Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-medium mb-3 text-primary'>Contact Us</h3>
            <p className='text-sm text-gray-500'>Phone: +123 456 7890</p>
            <p className='text-sm text-gray-500'>Email: info@trusteddoctors.com</p>
            <div className='flex justify-center md:justify-start gap-4 mt-4'>
              <a href='#' className='text-gray-500 hover:text-primary transition duration-300'><i className='fab fa-facebook'></i></a>
              <a href='#' className='text-gray-500 hover:text-primary transition duration-300'><i className='fab fa-twitter'></i></a>
              <a href='#' className='text-gray-500 hover:text-primary transition duration-300'><i className='fab fa-linkedin'></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center pt-6'>
          <p className='text-xs text-gray-400 text-center md:text-left'>© {new Date().getFullYear()} Trusted Doctors. All Rights Reserved.</p>
          <ul className='flex gap-4 text-xs mt-4 md:mt-0'>
            <li><a href='#' className='hover:text-primary transition duration-300'>Privacy Policy</a></li>
            <li><a href='#' className='hover:text-primary transition duration-300'>Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
