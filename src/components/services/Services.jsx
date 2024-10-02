import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

// Animation variants
const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  // Sample service data
  const services = [
    {
      id: 1,
      title: 'Branding',
      description:
        'We create a unique identity for your brand to make a lasting impression.',
    },
    {
      id: 2,
      title: 'Web Design',
      description:
        'Beautiful and responsive designs that drive engagement and growth.',
    },
    {
      id: 3,
      title: 'Marketing',
      description:
        'Effective strategies to reach your target audience and grow your business.',
    },
    {
      id: 4,
      title: 'Consulting',
      description:
        'Expert advice to help you navigate your business challenges and opportunities.',
    },
  ];

  // Smooth scroll to the #Projects section
  const handleWhatWeDoClick = () => {
    window.location.hash = '#WhatWeDo';
  };

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      ref={ref}
      animate={isInView ? 'animate' : 'initial'} // Conditional animation
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          We focus on helping your brand grow <br></br>and move forward.
        </p>
        <hr />
      </motion.div>

      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='Collaboration and teamwork' />
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Unique </motion.b>
            Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>For Your </motion.b>
            Business.
          </h1>
          <button onClick={handleWhatWeDoClick}>What we do?</button>
        </div>
      </motion.div>

      <motion.div className='listContainer' variants={variants}>
        {services.map((service) => (
          <motion.div
            className='box'
            key={service.id}
            whileHover={{ background: 'lightgray', color: 'black' }}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button>Learn More</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
