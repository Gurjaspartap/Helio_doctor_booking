import React, { useState } from 'react';

const Login = () => {
  const [login, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
      <form
        className='w-full max-w-md p-8 bg-white shadow-lg rounded-lg'
        onSubmit={onSubmit}
      >
        <h2 className='text-2xl font-semibold text-center mb-6 text-gray-800'>
          {login ? 'Login' : 'Sign Up'}
        </h2>
        <p className='text-center text-gray-500 mb-8'>
          Please {login ? 'login' : 'sign up'} to book an appointment
        </p>

        {/* Full Name */}
        {!login && (
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-medium mb-2'>
              Full Name
            </label>
            <input
              type='text'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        {/* Email */}
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-medium mb-2'>
            Email
          </label>
          <input
            type='email'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        {/* Password */}
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-medium mb-2'>
            Password
          </label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button
              type='button'
              className='absolute inset-y-0 right-0 px-3 py-2 text-gray-600 hover:text-gray-800 focus:outline-none'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300'
        >
          {login ? 'Login' : 'Sign Up'}
        </button>

        {/* Switch between login and sign up */}
        <p className='mt-4 text-center text-sm text-gray-600'>
          {login ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            onClick={() => setIsLogin(!login)}
            className='text-blue-500 hover:text-blue-700 cursor-pointer transition duration-200 font-medium'
          >
            {login ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
