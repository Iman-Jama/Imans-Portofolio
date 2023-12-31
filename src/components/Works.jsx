// import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import PropTypes from 'prop-types'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  app_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} >
      
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        
        className='mx-[30px]  bg-gradient-to-r from-pink-500 to-rose-500 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='grid grid-cols-3relative w-full h-[230px] hover:cursor-pointer' onClick={() => window.open(app_link, "_blank")}>
          <img
            
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  app_link: PropTypes.string.isRequired,
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 id="Projects" className="mx-[30px] my-10 text-rose-900 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Projects</h2>
      </motion.div>

      <div className='w-full flex flex-wrap justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 mx-[30px] text-rose-600 text-[17px] max-w-3xl leading-[30px]'
        >
         The projects I present serve as tangible demonstrations of my skills and expertise. These real-life examples effectively showcase my abilities by providing concise descriptions, along with links to code repositories. They highlight my proficiency in tackling intricate challenges, adapting to various technologies, and efficiently managing projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-evenly'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;