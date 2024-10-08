import './about.scss';
import contact from '/about.jpg';
import contact2 from '/ab1.jpg';
import contact3 from '/ab2.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='aboutUs'>
        <img src={contact2} alt='contact2' />
        <img src={contact} alt='contactUs' />
        <img src={contact3} alt='contact4' />
      </div>
      <h1>About Us</h1>
      <p>
        At [Your Company], we are passionate about creating unique digital
        experiences, combining creative design with innovative web development
        solutions. With a dedicated team of specialists in UI/UX design and web
        programming, we focus on developing functional, attractive, and
        optimized websites for any device. Our mission is to transform your
        vision into a memorable online presence, ensuring that each project is
        tailored to reflect your brand's identity. We use the latest
        technologies and industry trends to create fast, secure, and
        user-friendly platforms. Whether you need a presentation website, an
        online store, or a complex web application, we are here to bring your
        ideas to life and ensure your success in the digital space.
      </p>
    </div>
  );
};

export default About;
