import appBg from "@/assets/mobileAppBg.webp";
import gpayBtn from "@/assets/googlePlayButton.webp";
// import {motion} from 'framer-motion';

const LearningApp = () => {

  const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};



  return (
   <>
<section className="w-full py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20" data-aos="fade-up">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Left Image */}
      <div className="flex justify-center">
        <img variants={card}
          src={appBg}
          alt="Master Mind App"
          className="w-full max-w-md lg:max-w-lg h-auto" loading="lazy"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-center mx-auto md:text-left md:ml-0 font-bold text-[rgb(var(--secondary))] text-[clamp(28px,4.3vw,46px)]">
          Master Mind Learning App
        </h2>

        <p className="mt-4 text-center mx-auto md:text-left md:ml-0 text-gray-800 leading-relaxed max-w-xl text-[clamp(14px,1.2vw,18px)]">
          Master Mind is dedicated PSC learning app designed to help aspirants
          prepare effectively for competitive exams. It offers comprehensive
          study materials, updated syllabus coverage, mock tests, and practice
          questions tailored to PSC exams.
        </p>

        <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
          <span className="px-4 py-2 bg-gray-200 rounded-md text-sm max-[290px]:w-[80%] max-[290px]:text-center text-[clamp(12px,1vw,16px)]">
            24 x 7 Access
          </span>
          <span className="px-4 py-2 bg-gray-200 rounded-md text-sm max-[290px]:w-[80%] max-[290px]:text-center text-[clamp(12px,1vw,16px)]">
            Expert Tutors
          </span>
          <span className="px-4 py-2 bg-gray-200 rounded-md text-sm max-[290px]:w-[80%] max-[290px]:text-center text-[clamp(12px,1vw,16px)]">
            Mock Tests
          </span>
        </div>

        <div className="mt-7">
          <img variants={card}
            src={gpayBtn}
            alt="Google Play"
            className="w-40 rounded-lg mx-auto md:ml-0"
          />
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default LearningApp