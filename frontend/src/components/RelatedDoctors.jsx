import React, { useState, useEffect, useContext } from 'react'
import DoctorCard from './DoctorCard'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
const RelatedDoctors = ({ speciality, docId }) => {
  const doctors = useContext(AppContext)
  const [relatedDoc, setRelatedDoc] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    setRelatedDoc(doctors.filter(doc => doc.speciality === speciality && doc._id !== docId))
  }, [speciality, docId])

  return (
    <div className="flex flex-col items-center gap-4 " >
      <h1 className='text-3xl font-semibold' >Related Doctors</h1>
      <p>Simply browse through our <br /> extensive list of trusted doctors </p>
      <div className="doctors grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6 px-3 sm:px-0">
        {
          relatedDoc.slice(0, 5).map((item) => (<DoctorCard key={item._id} doctor={item}
            onClick={
              () => { navigate(`/doctors/${item._id}`); scrollTo(0, 0) }} />))
        }
      </div>
    </div>
  )
}

export default RelatedDoctors