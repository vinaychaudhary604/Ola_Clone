import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const HomeNavbar = () => {
  return (
    <nav className='bg-black py-4'>
        <div className='container max-auto px-4'>
            <div className='flex justify-between items-center'>

                <div className='flex items-center'>
                    <div className='flex items-center mx-5 ml-12'>
                        <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg" alt="Logo" />

                    </div>
                    <div>
                        <ul className='flex items-center'>
                            {/* <li className='mr-6'>
                                <a href="#" className='text-white hover:text-blue-200'>
                                    Ola s1
                                </a>
                            </li> */}
                            <li className='ml-10  text-sm'>
                                <a href="#" className='text-white hover:text-blue-200'>
                                    Ola electric
                                </a>
                            </li>
                            <li className='ml-6 text-sm'>
                                <a href="#" className='text-white hover:text-blue-200'>
                                    Ola Krutrim
                                </a>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div>
                    <button className='bg-gray-700 text-white hover:bg-gray-900 text-sm font-semifold px-4 py-3'> 
                        Book an Ola Cab
                    </button>
                    <button className='bg-gray-700 text-white hover:bg-gray-900 text-sm font-semifold px-4 py-3 ml-5'> 
                        Free S1 Test Ride
                    </button>

                    <MenuIcon className='ml-5 text-white text-3xl'/>
                    </div>
            </div>

        </div>
    </nav>
  )
}

export default HomeNavbar
