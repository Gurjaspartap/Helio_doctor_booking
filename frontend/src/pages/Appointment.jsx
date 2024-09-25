import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets';
import BookingSlots from '../BookingSlots';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const doctors = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  const getAvailableSlots = async () => {

  }
  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId])
  return docInfo && (
    <div>
      {/* Doctor details */}
      <div className='flex flex-col sm:flex-row gap-4 ' >
        <div>
          <img className='bg-primary w-full sm-max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0' >
          {/* doc info:name degree,exprience */}
          <p className='text-3xl font-semibold text-gray-900 flex items-center gap-2' >{docInfo.name}<img src={assets.verified_icon} /> </p>
          <div>
            <p className='text-gray-700 text-lg mt-2'>{docInfo.degree}- {docInfo.speciality} </p>
            <button>{docInfo.experience} </button>
          </div>
          {/* Doctor About */}
          <div>
            <p className='text-xl font-semibold flex items-center gap-1 text-gray-900'>About <img src={assets.info_icon}></img> </p>
            <p className='text-gray-700 mt-3 leading-relaxed text-base' >{docInfo.about} </p>
          </div>
          <p className='text-gray-500 font-medium mt-4 ' >Appointment fee: <span className='text-gray-600'> ${docInfo.fees} </span> </p>
        </div>
      </div>
      <BookingSlots />
      <button className='bg-primary text-white px-6 py-2 rounded-lg mt-6 w-full hover:bg-blue-700' >Book now</button>

      {
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      }
    </div>

  )
}

export default Appointment