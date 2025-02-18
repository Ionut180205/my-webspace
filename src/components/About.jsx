import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSqlite } from 'react-icons/si';


const About = () => {
  return (
    <div className='bg-black text-white py-20 px-6'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center'>

        <div className='space-y-4 text-xl font-semibold'>

          <p className='flex items-center gap-2'><FaMapMarkerAlt /> Arad/Timisoara, România</p>
          <p className='flex items-center gap-2'><FaPhone /> 0755 670 957</p>
          <p className='flex items-center gap-2'><FaEnvelope /> ionut.cioarsa@gmail.com</p>

          <div className='flex items-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/ioan-cioarsa-975433310/' target='_blank' rel='noopener noreferrer'> <FaLinkedin /> </a>
            <a href='https://github.com/Ionut180205' target='_blank' rel='noopener noreferrer'><FaGithub /></a>
          </div>
          
        </div>
        
        
        <div className='self-start'>
            
            <div className='mt-6'>
                <h3 className='text-xl font-semibold mb-4'>Skills :</h3>
                <div className='flex flex-wrap gap-4 text-4xl'>
                    <FaHtml5 className='text-orange-500' title='HTML5' />
                    <FaCss3Alt className='text-blue-500' title='CSS3' />
                    <FaJs className='text-yellow-500' title='JavaScript' />
                    <SiTypescript className='text-blue-600' title='TypeScript' />
                    <FaReact className='text-cyan-500' title='React' />
                    <SiNextdotjs className='text-black dark:text-white' title='Next.js' />
                    <SiTailwindcss className='text-cyan-400' title='Tailwind CSS' />
                </div>
            </div>
            
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Also worked with :</h3>
                <div className="flex flex-wrap gap-4 text-4xl items-center">
                    <FaPython className='text-yellow-500' title='Flask' />
                    <div className="flex items-center gap-2">
                        <SiSqlite className="text-blue-600" title="SQLite" />
                        <p className='text-xl'>SQLite</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaDatabase className="text-blue-800" title="MS SQL" />
                        <p className='text-xl'>MS SQL</p>
                    </div>
                </div>
            </div>


        </div>

      </div>
    </div>
  );
};

export default About;
