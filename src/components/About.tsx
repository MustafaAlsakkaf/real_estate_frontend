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
        About <span className='!text-[#4B0082]'>Us</span>
      </h1>
      <p className='text-gray-500 max-w-2xl text-center mb-16 mt-10'>
        We are committed to providing the best logistics services, ensuring smooth and reliable
        shipments. Our experienced team is dedicated to making your supply chain efficient and
        stress-free.
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-16'>
        {/* CEO Card */}
        <div className='flex flex-col items-center text-center bg-white p-8 rounded-xl flex-1'>
          <img
            src={assets.profile}
            alt='CEO'
            className='w-40 h-40 object-cover object-[center_15%] rounded-full border-4 border-purple-400 shadow-lg mb-6'
          />
          <h2 className='text-2xl font-bold text-gray-800'>Mustafa Al-Sakkaf</h2>
          <p className='text-purple-600 font-medium mb-3'>CEO & Founder</p>
          <p className='max-w-md text-gray-600 mb-6'>
            "Leading our company with a vision for innovation, reliability, and customer-first
            service."
          </p>
          <div className='flex flex-col gap-3 text-gray-700'>
            <a
              href='tel:+966500000000'
              className='flex items-center gap-2 hover:text-blue-600 transition'>
              <Phone className='w-5 h-5' /> +86 175 517 041 31
            </a>
            <a
              href='mailto:ceo@company.com'
              className='flex items-center gap-2 hover:text-blue-600 transition'>
              <Mail className='w-5 h-5' /> info.deallogistics@gmail.com
            </a>
          </div>
        </div>

        {/* Stats + Mission */}
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 flex-1'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 text-center'>
            <div>
              <p className='text-4xl font-bold bg-gradient-to-r from-[#72d6e1] to-[#4B0082] text-transparent bg-clip-text'>
                <Counter target={10} />
              </p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className='text-4xl font-bold bg-gradient-to-r from-[#72d6e1] to-[#4B0082] text-transparent bg-clip-text'>
                <Counter target={500} />
              </p>
              <p>Shipments</p>
            </div>
            <div>
              <p className='text-4xl font-bold bg-gradient-to-r from-[#72d6e1] to-[#4B0082] text-transparent bg-clip-text'>
                <Counter target={200} />
              </p>
              <p>Happy Clients</p>
            </div>
            <div>
              <p className='text-4xl font-bold bg-gradient-to-r from-[#72d6e1] to-[#4B0082] text-transparent bg-clip-text'>
                <Counter target={20} />
              </p>
              <p>Partners</p>
            </div>
          </div>

          <p className='my-10 max-w-lg'>
            Our mission is to deliver exceptional value and service to our clients, ensuring their
            satisfaction and success in every shipment and partnership.
          </p>

          {/* <button className='bg-gradient-to-r from-[#72d6e1] to-[#1964bf] text-white px-8 py-2 rounded shadow hover:opacity-90 transition'>
            Learn More
          </button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
