import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import DoctorCard from '../components/DoctorCard';


const Doctors = () => {
  const doctors = useContext(AppContext);
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const specialties = [
    "General Physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatrician",
    "Neurologist",
    "Gastroenterologist"
  ];

  useEffect(() => {
    setLoading(true);
    if (doctors) {
      if (speciality) {
        const filteredDoctors = doctors.filter(doc =>
          doc.speciality.toLowerCase() === speciality.toLowerCase()
        );
        setFilterDoc(filteredDoctors);
      } else {
        setFilterDoc(doctors); // Show all doctors if no speciality is provided
      }
      setLoading(false);
    }
  }, [speciality, doctors]);

  if (loading) {
    return <p className='text-center my-16 text-gray-600'>Loading doctors...</p>;
  }

  return (
    <div className='flex flex-col sm:flex-row items-startmgap-5 mt-5'  >



      <div className='w-1/4'>
        <p className='text-gray-700  '>Browse through the doctors' specialties to find the right match for your needs.</p>

        <ul className='pl-6  '>
          <h2 className='text-lg font-semibold mb-2'>Specialties</h2>
          {specialties.map((speciality) => (
            <li className='cursor-pointer py-3 border hover:bg-slate-600 hover:text-white ' key={speciality} onClick={() => { navigate(`/doctors/${speciality}`) }}  >{speciality} </li>
          ))}
        </ul>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-2'>
        {filterDoc.length > 0 ? (
          filterDoc.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        ) : (
          <p className='col-span-full text-center text-gray-600'>No doctors found for this specialty.</p>
        )}
      </div>

    </div>
  );
};

export default Doctors;
