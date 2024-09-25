import React, { useState } from 'react';
import { assets } from "../assets/assets_frontend/assets"; // Import your assets

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Harry",
    image: assets.profile_pic, // Placeholder image from your assets
    email: 'harry@gmail.com',
    phone: '1234567890',
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London"
    },
    gender: 'Male',
    dob: "1990-01-01", // Using YYYY-MM-DD format for input compatibility
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (field, value) => {
    if (field.includes("address")) {
      const addressField = field.split('.')[1];
      setUserData({
        ...userData,
        address: { ...userData.address, [addressField]: value }
      });
    } else {
      setUserData({ ...userData, [field]: value });
    }
  };

  return (
    <div className=" animate-fadeIn max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      {/* Profile Picture */}
      <div className="flex items-center justify-center flex-col">
        <img
          src={userData.image}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
        />
        {isEdit && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />
        )}
      </div>

      {/* Profile Details */}
      <div className="mt-6 text-center">
        {/* Name */}
        {isEdit ? (
          <input
            type="text"
            className="border-b-2 border-gray-300 text-xl text-center focus:outline-none focus:border-blue-500 transition duration-200 w-full"
            onChange={e => handleInputChange("name", e.target.value)}
            value={userData.name}
          />
        ) : (
          <h1 className="text-2xl font-semibold">{userData.name}</h1>
        )}

        {/* Edit Button */}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? "Save" : "Edit Profile"}
        </button>
      </div>

      <hr className="my-6" />

      {/* Contact Information */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
        <div className="space-y-2">
          <div>
            <p>Email</p>
            {isEdit ? (
              <input
                type="email"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                onChange={e => handleInputChange("email", e.target.value)}
                value={userData.email}
              />
            ) : (
              <p>{userData.email}</p>
            )}
          </div>
          <div>
            <p>Phone</p>
            {isEdit ? (
              <input
                type="text"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                onChange={e => handleInputChange("phone", e.target.value)}
                value={userData.phone}
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Address Information */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Address</h2>
        <div className="space-y-2">
          <div>
            {isEdit ? (
              <input
                type="text"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                onChange={e => handleInputChange("address.line1", e.target.value)}
                value={userData.address.line1}
              />
            ) : (
              <p>{userData.address.line1}</p>
            )}
          </div>
          <div>
            {isEdit ? (
              <input
                type="text"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                onChange={e => handleInputChange("address.line2", e.target.value)}
                value={userData.address.line2}
              />
            ) : (
              <p>{userData.address.line2}</p>
            )}
          </div>
        </div>
      </div>

      <hr className="my-6" />

      {/* Additional Information */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
        <div className="space-y-2">
          <div>
            <p>Gender</p>
            {isEdit ? (
              <select
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                onChange={e => handleInputChange("gender", e.target.value)}
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>
          <div>
            <p>Date of Birth</p>
            {isEdit ? (
              <input
                type="date"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                onChange={e => handleInputChange("dob", e.target.value)}
                value={userData.dob}
              />
            ) : (
              <p>{new Date(userData.dob).toLocaleDateString()}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
