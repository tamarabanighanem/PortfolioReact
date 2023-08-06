import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import pro1 from './../images/masterpicePhoto.png'
import pro2 from  './../images/charityPhoto.png'
import pro3 from '../images/playTopiaPhoto.png'
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Projects</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <span className="secondaryText">Explore More Works visit  <a className= '' href="https://github.com/tamarabanighanem" >my Github</a></span>
          
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src={pro1} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src={pro2} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={pro3} alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
