import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import DoctorCard from './DoctorCard';

const TopDoctors = () => {
  const navigate = useNavigate();
  const doctors = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-semibold'>Top Doctors To Book</h1>
      <p className='sm:w-1/3 text-center text-sm text-gray-600'>
        Simply browse through our extensive list of trusted doctors
      </p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item) => (
          <DoctorCard key={item._id} doctor={item} />
        ))}
      </div>

      {/* Button to navigate to all doctors */}
      <button
        onClick={() => navigate('/doctors')}
        className='mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300'
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
