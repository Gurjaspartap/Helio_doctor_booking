import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/appointment/${doctor._id}`)}
      className='border w-80 border-gray-200 rounded-xl overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg duration-300 '
    >
      <img
        className='w-full h-auto object-cover bg-blue-50'
        src={doctor.image}
        alt={doctor.name}
      />
      <div className='p-4'>
        <div className='flex items-center justify-center gap-2 text-sm text-green-500 mb-2'>
          <span className='w-2 h-2 bg-green-500 rounded-full'></span>
          <p>Available</p>
        </div>
        <p className='text-lg font-semibold text-center'>{doctor.name}</p>
        <p className='text-gray-600 text-center text-sm'>{doctor.speciality}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
