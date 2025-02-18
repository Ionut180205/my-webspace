import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import HomeImage from '../assets/pozaCV.jpg';

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className='bg-black text-white text-center py-16 flex flex-col justify-center items-center'>
      <img
        src={HomeImage}
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
        alt='Profile'
      />
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Cioarsa Ioan
        </span>
        , Full-Stack Developer
      </h1>

     
      <button
        onClick={() => navigate('/resume')} 
        className='mt-10 px-6 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105'
      >
        Resume
      </button>
    </div>
  );
};

export default Home;