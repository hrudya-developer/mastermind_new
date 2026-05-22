import hero_img_lg from '@/assets/student-medium.webp'
import './hero.css'
import { ModalContext } from "@/context/ModalContext";
import { useContext, useEffect, useState } from 'react';
import students from '@/assets/students.png';

export default function Hero() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const {openLogin}= useContext(ModalContext)
     const {openRegister}= useContext(ModalContext)
  
    // Detect scroll
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 60);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  
    const closeMenu = () =>{
      setOpen(false);
    }



  return (
   <main id="main-content" className="w-full h-auto bg_gradient py-16 pt-46 max-[768px]:pt-50 bg-[linear-gradient(-175deg,#21adff38_0%,#f0edff_100%)]">
      <div className="mx-auto grid md:grid-cols-2 gap-10 items-start max-w-7xl px-10 md:px-16 lg:px-24 xl:px-28 2xl:px-36 py-4 mt-28">
        {/* Left Content */}
        <div className='' data-aos="fade-right">
          <h1 className="text-center md:text-start text-[clamp(26px,4.3vw,48px)] font-bold text-[rgb(var(--secondary))] leading-tight">
            Complete Learning Hub for Competitive Exams
          </h1>

          <p className="text-gray-800 mt-4 max-w-lg text-[clamp(14px,1.2vw,18px)] text-center mx-auto md:text-start">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>

        <div className="flex gap-4 mt-6 justify-center md:justify-start max-[394px]:flex-col">
  <button type="button" onClick={openRegister} className="bg-[rgb(var(--secondary))] text-white px-6 py-3 hover:cursor-pointer rounded-xl shadow hover:bg-[rgb(var(--primary))] transition text-[clamp(12px,1vw,18px)] max-[394px]:w-40.75 max-[394px]:mx-auto">
    Register Now
  </button>

  <button type="button" className="bg-[#0b0c0e] text-white px-6 py-3 rounded-xl shadow hover:bg-[rgb(var(--primary))] hover:cursor-pointer transition text-[clamp(12px,1vw,16px)] max-[394px]:w-40.75 max-[394px]:mx-auto">
    <a href='#courses'>Explore Courses</a>
  </button>
</div>

          {/* Stats */}
          <div className="text-center justify-center max-w-105 flex mt-10 mx-auto sm:w-full md:ml-0 md:justify-start md:text-left">
            <div className='mr-5'>
              <h2 className="text-2xl font-bold text-[rgb(var(--primary))]">5k+</h2>
              <p className="text-gray-800 text-sm">Active Students</p>
            </div>
            <div className='mr-5'>
              <h2 className="text-2xl font-bold text-[rgb(var(--primary))]">95%</h2>
              <p className="text-gray-800 text-sm">Success Rate</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[rgb(var(--primary))]">50+</h2>
              <p className="text-gray-800 text-sm">Expert Teachers</p>
            </div>
          </div>
        </div>

        
    <div className="flex sm:justify-center justify-center md:justify-end items-start">
    <div className="w-full max-w-md">
      <img src={hero_img_lg} alt="Student Image" className="w-full h-auto object-contain md:animate-[fadeIn_1s_ease-out]" fetchPriority="high" loading="eager"/>
    </div>
  </div>

</div>

        
          </main>
     
    
  )
  
}
