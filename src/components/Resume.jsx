import React from 'react';

const Resume = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white min-h-screen p-8">
      

      {/* About Me Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <p className="text-lg leading-relaxed">
          I'm a Full-Stack Developer specializing in Frontend, with additional Backend experience gained through hands-on project work.
          I enjoy working in teams, not just for the knowledge sharing, but also for the fun and collaboration.
          Whenever I face challenges, I rely on official resources for research to find the best solutions.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-800 py-12 mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Education</h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold">West University of Timisoara</h3>
            <p className="text-lg">Bachelor's Degree in Computer Science</p>
            <p className="text-gray-400">Estimated Graduation Time: July 2026</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">"Moise Nicoara" National College</h3>
            <p className="text-lg">High School Diploma</p>
            <p className="text-gray-400">Graduated: 2021</p>
            <p className="text-gray-400">Awards: 2nd place - Informatics Olympiad 2018 & 2019 county stage;
                                                 1st place in county - International Informatics Olympiad in Teams 2018 & 2019;
                                                 3rd place - Mathematics Olympiad 2017 county stage; GPA of 9.9/10
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-12 mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Freelance Experience</h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Freelance Web Developer</h3>
            <p className="text-lg">Developed custom websites for various clients, specializing in front-end development using HTML, CSS, JavaScript, and React. Responsible for designing user-friendly interfaces and ensuring responsive designs.</p>
            <p className="text-gray-400">Developed: Website for Mathematics department at my school, Website for a beauty saloon in Austria, Beta version
                of a remote desktop server for Nukkon and it's own web design, managed and improved Management System for Sabor Restaurant </p>
            <p className="text-gray-400">2019 - Present</p>
          </div>
          
        </div>
      </section>

     
      <div className="flex justify-center mb-10">
        <button
          onClick={() => window.history.back()}
          className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Resume;
