import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import tamara from '../images/tamaraphoto-removebg-preview.png'
const Hero = () => {
  return (
    <section id="hero" className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Tamara.
          </motion.span>
          {/* <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
          <span>F u l l - S t a c k W e b D e v e l o p e r  </span>
            <br />
            Software Engineering{" "}
          </motion.span> */}
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src={tamara} alt="" />
        </motion.div>


        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            {/* <div className="primaryText">1</div> */}
            <div className="secondaryText">
            <a className= '' href="mailto:tbanighanem@gmail.com" ><svg class="h-8 w-8 pb-3 text-gray-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg></a>
              <a className= '' href="https://instagram.com/tamarabanighanem?igshid=Y2I2MzMwZWM3ZA==" ><svg class="h-8 w-8 pb-3 text-gray-100"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg></a>
              <a className= '' href="https://github.com/tamarabanighanem" ><svg class="h-8 w-8 pb-3 text-gray-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></a>
              <a className= '' href="https://www.linkedin.com/in/tamara-banighanem-348751231" ><svg class="h-8 w-8 pb-3 text-gray-100"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></a>
              {/* <div>Experience</div> */}
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            {/* <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span> */}
              <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
          <span>F u l l - S t a c k  W e b D e v e l o p e r &  </span>
            <br />
            Software Engineering{" "}
          </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
