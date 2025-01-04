import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { FaGift } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { MdClass } from 'react-icons/md';
import { PiCertificateFill } from 'react-icons/pi';

const About = () => {
    return (
        <div className='mt-12 mb-12'>
            <h3 className='text-lg text-gray-500 uppercase mb-8 ml-4'>About Me</h3>
            <h2 className='text-2xl uppercase font-semibold mb-4 ml-4'>Who am I?</h2>
                 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='border border-2 border-primary rounded-2xl p-4'>
                    <p className='text-gray-600 mt-8'><span className='font-semibold'>Hi I'm Muntajima Mahbub, </span>a passionate Frontend Web Developer with a knack for creating visually appealing and user-friendly web applications. Proficient in React, Tailwind CSS, and DaisyUI, Express, MongoDB, I specialize in crafting responsive designs that bring ideas to life. I love solving problems, learning new technologies, and turning complex challenges into simple, elegant solutions. Let's build something amazing together!"</p>
                </div>
                <div className='space-y-4 border border-2 border-primary rounded-2xl p-4'>
                    <Slide direction='right'>
                        <div className='flex gap-3 items-center'>
                            <PiCertificateFill className='text-pink-700' />
                            <h3> <strong>B.Sc:</strong> Computer Science and Engineering</h3>
                            <h2><strong>CGPA: </strong> 3.52</h2>
                        </div>
                    </Slide>
                    <Slide direction='right' delay={500}>
                        <div className='flex gap-3 items-center'>
                            <MdClass className='text-pink-700' />
                            <h3> <strong>HSC:</strong> (Science) 2001-2003</h3>
                            <h2><strong>GPA: </strong> 3.50</h2>
                        </div>
                    </Slide>
                    <Slide direction='right' delay={900}>
                        <div className='flex gap-3 items-center'>
                            <MdClass className='text-pink-700' />
                            <h3> <strong>SSC:</strong> (Science) 2000-2001</h3>
                            <h2><strong>GPA: </strong> 4.50</h2>
                        </div>

                    </Slide>
                    <Slide direction='right' delay={1300}>
                        <div className='flex gap-3 items-center'>
                            <FaGift className='text-pink-700' />
                            <h3> <strong>Birthday:</strong> 7th March 1986, </h3>
                            <h2><strong>Bangladeshi</strong></h2>
                        </div>

                    </Slide>
                    <Slide direction='right' delay={1700}>
                        <div className='flex gap-3 items-center'>
                            <IoLocation className='text-pink-700' />
                            <h3> <strong>Location:</strong> Shaymoli, Dhaka. </h3>
                        </div>

                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default About;