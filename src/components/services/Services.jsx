import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod reprehenderit eum aspernatur ab dignissimos amet maxime natus! Beatae, a!',
    },
    {
      id: 2,
      title: 'Web Design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod reprehenderit eum aspernatur ab dignissimos amet maxime natus! Beatae, a!',
    },
    {
      id: 3,
      title: 'Marketing',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod reprehenderit eum aspernatur ab dignissimos amet maxime natus! Beatae, a!',
    },
    {
      id: 4,
      title: 'Consulting',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod reprehenderit eum aspernatur ab dignissimos amet maxime natus! Beatae, a!',
    },
  ];

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
          I focus on helping your brand grow <br></br>and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='People collaborating' />
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
          <button>What we do?</button>
        </div>
      </motion.div>

      <motion.div className='listContainer' variants={variants}>
        {services.map((service) => (
          <motion.div
            className='box'
            key={service.id} // Unique key for each service box
            whileHover={{ background: 'lightgray', color: 'black' }}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
