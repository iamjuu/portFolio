import Tilt from 'react-parallax-tilt'; // Updated import
import { motion } from 'framer-motion';
import { styles } from '../styles.js';
import { services } from '../constant';
import { fadeIn } from '../utils/motion.js';
import SectionWrapper from '../hoc/SectionWrapper';
const About = () => {
  const ServicesCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <>
      <motion.div>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum exercitationem odit accusantium incidunt
        molestiae possimus ad explicabo neque non illo consequatur quia eius unde, accusamus illum facilis mollitia
        blanditiis eveniet!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default  SectionWrapper (About,"About");
