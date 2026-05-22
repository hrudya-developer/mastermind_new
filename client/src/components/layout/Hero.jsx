// import hero_img_lg from "@/assets/student-medium.webp";
import heroBg2 from "@/assets/heroBg2.png";

import "./hero.css";
import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";
// import heroBg from "@/assets/heroBg1.png";
import { GraduationCap, ThumbsUp, UsersRound } from "lucide-react";

export default function Hero() {
  const { openRegister } = useContext(ModalContext);

  return (
    <main
      id="main-content"
      className="relative w-full overflow-hidden pt-28"
    >
      <div
  className="
    mx-auto
    grid
    max-w-7xl
    w-full
    min-h-[700px]
    grid-cols-1
    items-center
    gap-10
    md:grid-cols-1
    bg-no-repeat
    bg-cover
    bg-center
    relative
    overflow-hidden px-36
  "
  style={{
    backgroundImage: `url(${heroBg2})`,
  }}
>
        {/* Left Content */}
        <div data-aos="fade-right">
          <h1 className="text-center text-[clamp(26px,4.3vw,44px)] font-bold leading-tight text-[#0f2289] md:text-left">
            Complete Learning Hub for<br /> <span className="gradient-text ">Competitive Exams</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-center text-[clamp(14px,1.2vw,18px)] text-gray-800 md:mx-0 md:text-left">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="mt-6 flex justify-center gap-4 max-[394px]:flex-col md:justify-start">
            <button
              type="button"
              onClick={openRegister}
              className="rounded-xl buttonGradient px-6 py-3 text-[clamp(12px,1vw,18px)] text-white shadow transition hover:cursor-pointer hover:bg-[rgb(var(--primary))] max-[394px]:mx-auto max-[394px]:w-40"
            >
              Register Now
            </button>

            <a
              href="#courses"
              className="rounded-xl bg-[rgb(5,23,106)] px-6 py-3 text-center text-[clamp(12px,1vw,16px)] text-white shadow transition hover:cursor-pointer hover:bg-[rgb(var(--primary))] max-[394px]:mx-auto max-[394px]:w-40"
            >
              Explore Courses
            </a>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 flex max-w-md justify-center text-center md:mx-0 md:justify-start md:text-left">
          <div className="mr-5 text-center bg-[#00a4ff3d] shadow-md p-4 rounded-lg">
  <span className="w-12 h-12 bg-white inline-flex items-center justify-center rounded-full">
    <UsersRound className="text-primary" />
  </span>

  <h2 className="text-lg font-semibold text-[rgb(5,23,106)] mt-2">
    5k+
  </h2>

  <p className="text-sm text-gray-800">
    Active Students
  </p>
</div>

                    <div className="mr-5 text-center bg-[rgb(142_167_255_/_43%)] shadow-md p-4 rounded-lg">
  <span className="w-12 h-12 bg-white inline-flex items-center justify-center rounded-full">
    <ThumbsUp className="text-primary" />
  </span>

  <h2 className="text-lg font-semibold text-[rgb(5,23,106)] mt-2">
    95%
  </h2>

  <p className="text-sm text-gray-800">
    Success Rate
  </p>
</div>
          <div className="text-center bg-[rgba(229,5,111,0.3)] shadow-md p-4 rounded-lg">
  <span className="w-12 h-12 bg-white inline-flex items-center justify-center rounded-full">
    <GraduationCap className="text-primary" />
  </span>

  <h2 className="text-lg font-semibold text-[rgb(5,23,106)] mt-2">
    50+
  </h2>

  <p className="text-sm text-gray-800">
    Expert Teachers
  </p>
</div>
          </div>
        </div>

     
        
      </div>


   
   
    </main>
  );
}