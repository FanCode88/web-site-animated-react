import { motion } from 'framer-motion';
import Settings from '/set.png';
import './links.scss';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ['Homepage', 'Services', 'Portfolio', 'Contact', 'About'];

  const handleSettingsClick = () => {
    window.location.hash = '#Settings';
  };

  return (
    <motion.div className='links' variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.a>
      ))}
      <motion.img
        src={Settings}
        alt='Settings'
        onClick={handleSettingsClick}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.1,
            ease: 'easeIn',
          },
        }}
      />
    </motion.div>
  );
};

export default Links;
