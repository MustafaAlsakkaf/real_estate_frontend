import { servicesData } from '../assets/assets';
import { motion } from 'framer-motion';

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden'
      id='Services'>
      {/* Section Heading */}
      <div className='text-center mb-14'>
        <h1 className='text-4xl sm:text-4xl font-bold mb-8'>Our Services</h1>
        <h4 className='text-2xl sm:text-4xl font-semibold leading-snug'>
          From cargo transit to warehousing,{' '}
          <span className='font-bold text-[#4B0082]'>we offer unparalleled support.</span>
        </h4>
      </div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden'>
            {/* Image */}
            <div className='relative'>
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-56 object-cover rounded-t-xl'
              />
              {/* Icon circle */}
              {/* <div className='absolute -bottom-6 left-6 bg-white p-4 rounded-full shadow-md'>
                <img src={service.icon} alt={service.title} className='w-6 h-6 text-blue-600' />
              </div> */}
            </div>

            {/* Content */}
            <div className='p-6 pt-10'>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>{service.title}</h3>
              <p className='text-gray-600 text-sm mb-4'>{service.description}</p>
              <a href='#' className='text-blue-600 font-medium text-sm hover:underline'>
                
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;
