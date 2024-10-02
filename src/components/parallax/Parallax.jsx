import { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const handleScrollPosition = (e, hash) => {
  e.preventDefault();
  const scrollPosition = window.scrollY;
  window.history.pushState({ scrollPosition }, '', hash);
  const target = document.getElementById(hash.substring(1));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

window.onpopstate = (event) => {
  if (event.state && event.state.scrollPosition !== undefined) {
    window.scrollTo(0, event.state.scrollPosition);
  } else {
    window.scrollTo(0, 0);
  }
};

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      className='parallax'
      ref={ref}
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === 'services' ? 'What We Do?' : 'What We Did?'}
      </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div
        className='planets'
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === 'services' ? '/planets.png' : '/sun.png'
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className='stars'></motion.div>
    </div>
  );
};

export default Parallax;

const Navigation = () => {
  return (
    <div>
      <button onClick={(e) => handleScrollPosition(e, '#Contact')}>
        Contact
      </button>
      <button onClick={(e) => handleScrollPosition(e, '#Portfolio')}>
        Portfolio
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navigation />
      <Parallax type='services' />
      <div id='Contact' style={{ height: '100vh' }}>
        Contact Section
      </div>
      <div id='Portfolio' style={{ height: '100vh' }}>
        Portfolio Section
      </div>
    </div>
  );
};
