import { motion } from 'framer-motion';
import Counter from './Counter';
import { Mail, Phone } from 'lucide-react'; // install lucide-react if not already
import { assets } from '../assets/assets';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center'>
        About Us
      </h1>
      <p className='text-gray-600 max-w-2xl text-center mb-16 mt-10'>
        <div className="text-gray-600 max-w-2xl text-center mb-16 mt-10 space-y-9">
  <p>
  <strong className='text-3xl'>Jedra</strong> is a next-generation real estate platform built to make property discovery in Saudi Arabia effortless and intelligent. 
    We combine trusted market data with AI-driven conversation to help homebuyers, investors, and tenants find the right property — faster, smarter, and with full confidence.
  </p>
  <p>Our mission is to <strong>simplify property search through technology</strong>, bringing transparency, speed, and reliability to every real estate decision.
  </p>
</div>

      </p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-16'>
        {/* CEO Card 
        <div className='flex flex-col items-center text-center bg-white p-8 rounded-xl flex-1'>
          <img
            src={assets.profile}
            alt='CEO'
            className='w-40 h-40 object-cover object-[center_15%] rounded-full border-4 border-gray-400 shadow-lg mb-6'
          />
          <h2 className='text-2xl font-bold text-gray-800'>Mustafa Alsakkaf</h2>
          <p className='text-gray-600 font-medium mb-3'>Founder & CEO</p>
        </div>

        {/* Stats + Mission */}
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 flex-1'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 text-center'>
          </div>


          {/* <button className='bg-gradient-to-r from-[#72d6e1] to-[#1964bf] text-white px-8 py-2 rounded shadow hover:opacity-90 transition'>
            Learn More
          </button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
