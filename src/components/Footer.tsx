import { assets } from '../assets/assets';
import { Facebook, Instagram, Linkedin } from 'lucide-react';


function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row sm:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo1} className='h-36 w-auto' alt='logo1' />
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-lg text-white font-bold mb-4'></h3>
          <ul className='flex flex-col gap-6 text-gray-400'>
            <a href='#Header' className='hover:text-white'>
              Home
            </a>
            <a href='#About' className='hover:text-white'>
              About us
            </a>
            <a href='#Services' className='hover:text-white'>
              Services
            </a>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='text-lg text-white font-bold mb-6'>Follow Us</h3>
          <div className='flex gap-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition'>
              <Facebook className='w-5 h-5' />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition'>
              <Instagram className='w-5 h-5' />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition'>
              <Linkedin className='w-5 h-5' />
            </a>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        © 2025 Company Name. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
