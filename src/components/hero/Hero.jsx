import './hero.scss';
import { motion } from 'framer-motion';
import hero from '/hero2.png';
import scrollIcon from '/scroll.png'; //

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const scrollButtonVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

const handleContactClick = () => {
  window.location.hash = '#Contact';
};

const handleLatestWorksClick = () => {
  window.location.hash = '#Portfolio';
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h1 variants={textVariants}>SACEANU IONUT</motion.h1>
          <motion.h2 variants={textVariants}>
            Web Developer and UI Designer
          </motion.h2>
          <div className='buttons'>
            <motion.button
              variants={textVariants}
              onClick={handleLatestWorksClick}
            >
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} onClick={handleContactClick}>
              Contact Me
            </motion.button>
          </div>
          <motion.img
            variants={scrollButtonVariants}
            initial='initial'
            animate='animate'
            src={scrollIcon}
            alt='Scroll down icon'
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Writer Content Creator Influence
      </motion.div>
      <div className='imageContainer'>
        <img src={hero} alt='Hero Image' />
      </div>
    </div>
  );
};

export default Hero;
