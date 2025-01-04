import { Slide } from 'react-awesome-reveal';
import img from '../../assets/miti.png'
import { IoMdDownload } from "react-icons/io";
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';

const Banner = () => {
    const handleDownload = () => {
        saveAs('/resume.pdf', 'My_Resume.pdf'); // Local or external file URL
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className='relative'>
                        <img src={img} className='max-w-sm rounded-full shadow-2xl mr-16' />
                        <Slide direction='up' className='bg-primary text-white italic text-center rounded-full px-4 absolute top-80 left-72'>Web Developer</Slide>
                        <Slide direction='left' className='bg-primary text-white italic text-center rounded-full px-4 absolute top-96'>Frontend Developer</Slide>
                        {/* <img
                        src="https://i.ibb.co.com/GJHH7BW/Tazone-Wedding-33.jpg"
                        className="max-w-lg rounded-lg shadow-2xl" /> */}
                    </div>
                    <div className='w-1/3'>
                        <h3 className='text-xl my-4'>Hello There!</h3>
                        <h1 className="text-4xl font-bold">I'm <span className='text-primary italic underline'>Muntajima Mahbub,</span>a passionate Frontend Web Developer</h1>
                        <p className="py-6">
                            Dedicated to crafting engaging, user-friendly web experiences. Skilled in React, Tailwind CSS, and modern design tools, I bring ideas to life with clean, responsive code. Let's build something amazing together!
                        </p>
                        <div className='bg-pink-800 w-56 rounded-full flex gap-6 h-12 items-center'>
                            <Link to='/resume' className="btn bg-primary rounded-full text-white h-12 items-center">View My Resume</Link>
                            <a
                                href='/public/Resume_Muntajima_Mahbub.pdf'
                                download='Resume_Muntajima_Mahbub.pdf'
                                className='btn rounded-full' ><IoMdDownload /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;