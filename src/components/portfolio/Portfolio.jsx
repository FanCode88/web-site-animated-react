import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.unsplash.com/photo-1714907135093-e60f0a730574?q=80&w=3018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cum sapiente eveniet vitae ullam officia!',
  },
  {
    id: 2,
    title: 'Next.Js Commerce',
    img: 'https://images.unsplash.com/photo-1658086351750-1ec43149a713?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cum sapiente eveniet vitae ullam officia!',
  },
  {
    id: 3,
    title: 'Vanilla JS App',
    img: 'https://images.unsplash.com/photo-1657882679697-2dcdacbc917f?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cum sapiente eveniet vitae ullam officia!',
  },
  {
    id: 4,
    title: 'Music App',
    img: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis cum sapiente eveniet vitae ullam officia!',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDemoClick = () => {
    const demoSection = document.getElementById('Demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer'>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }} ref={ref}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoClick}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
