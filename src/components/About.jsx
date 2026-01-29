import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo } from '../assets/assets'
const About = () => {
  return (
    <div>
        <motion.div
         initial={{opacity:0, y:50}}
         whileInView={{opacity:1, y:0}}
         transition={{duration: 0.6, ease: 'easeOut'}}
         viewport={{once:true}} 
         id='about'  
         className='py-20 bg-dark-200'
         >
            <div className='container mx-0 px-6'>
                {/*Heading*/}
                <h2 className='text-3xl font-bold text-center mb-4'>About
                     <span className='text-purple'>Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>
            </div>
               {/*my journey*/}

            <div className='flex flex-col md:flex-row items-center gap-12'>
                <motion.div
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 0.9, ease: 'easeOut'}}
                viewport={{once:false, amount:0.2}} 
                className='md:w-1/2'
                >  
                  <div className='rounded-2xl p-8'>
                     <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                     <p className='text-gray-300 mb-10'>I'm a passionate full-stack web developer with 4 years of experience building scalable, 
                        responsive web applications using MongoDB, Express.js, React, and Node.js. 
                        My journey started as a React Frontend Developer evolved into building complex web applications along with 
                        backend integration, authentication systems, performance optimization, API design, real-time communication systems(WebSockets, WebRTC).
                        </p>
                     <p>I’ve worked with teams in India and UAE, delivering clean, efficient solutions across the full development lifecycle. 
                        I am a highly motivated developer who values continuous learning, problem-solving, and teamwork, and I’m eager to contribute 
                        to impactful products while growing further as a full-stack engineer.
                         Currently upskilling and actively looking to explore new opportunities.</p>

                   
                  </div>
                </motion.div>
                 {/*Cards*/}
                        <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
                          {
                            aboutInfo.map((data, index)=> (
                               <div key={index} className='bg-dark-300
                               rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2
                               cursor-pointer'>
                                    <div className='text-purple text-4xl mb-4'>
                                        <data.icon />
                                    </div>
                                    <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                    <p className='text-gray-400'>{data.description}</p>
                               </div>
                            ))
                          }
                        </div>
            </div>

        </motion.div>
    </div>
  )
}

export default About