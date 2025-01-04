import cvPage1 from '../assets/cv1.png';
import cvPage2 from '../assets/cv2.png';

const Resume = () => {
    return (            
        <div className='flex flex-col justify-center items-center'>
            <h2 className='mt-24 text-2xl font-bold underline'>Resume of Muntajima Mahbub</h2>
            <img src={cvPage1} className='w-3/5 mt-12' />
            <img src={cvPage2} className='w-3/5 mb-12' />
        </div>
       
    );
};

export default Resume;