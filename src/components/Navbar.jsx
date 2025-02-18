import React from 'react'

const Navbar = () => {
  return (
        <nav className='bg-black px-8 md:px-16 lg:px-24'>
            <div className='container py-4 flex md-justify-between items-center'>
                <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    My Webspace
                </div>
            </div>
        </nav>
  )
}

export default Navbar