import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCourses, setSelectedCourse } from "@/redux/courseSlice";
import CoursesGrid from "./CouseGrid";
import { RiGraduationCapFill } from "react-icons/ri";
import background_img from '@/assets/backgroundImg_1.png'

const KeralaPsc = () => {
  const [selectedLevel, setSelectedLevel] = useState("10th");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `http://localhost:4000/api/courses/kerala-psc?level=${selectedLevel}`
    )
      .then((res) => res.json())
      .then((data) => {
        const safeData = Array.isArray(data) ? data : [];
        dispatch(setCourses(safeData)); // ✅ STORE in Redux
      })
      .catch((err) => console.log(err));
  }, [selectedLevel, dispatch]);

  const handleCourseDetails = (course) => {
    dispatch(setSelectedCourse(course));
    navigate(`/course/${course._id}`);
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-24 xl:px-28 2xl:px-36 mt-40">
         
        <div className="p-6 my-10 bg-blue-100 rounded-lg shadow-sm bg-cover" style={{ backgroundImage: `url(${background_img})`}}>
          <div className="breadcrumbs flex">  <ul>
                                  <li>
                                      <a>
                                          <FaBook />
                                          Courses
                                      </a>
                                  </li>
                                   <li>
                                      <a>
                                          Kerala PSC
                                      </a>
                                  </li>
                              </ul></div>
          <h2 className="text-3xl text-[rgb(var(--secondary))] font-bold py-4">Kerala PSC</h2>
        <p className="py-2">Your Journey to a Government Career Starts Here</p>
        </div>
        
<div className="flex gap-5 mt-5 items-center">
  {["10th", "12th", "degree"].map((level) => (
    <button
      key={level}
      onClick={() => setSelectedLevel(level)}
      className={`
        flex items-center gap-3
        px-5 py-3 rounded-xl transition-all
        ${
          selectedLevel === level
            ? "bg-[#ace1ff91] text-black"
            : "bg-red-100"
        }
      `}
    >
      <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        <RiGraduationCapFill size={18} />
      </span>

      <span className="capitalize font-medium">
        {level}
      </span>
    </button>
  ))}
</div>

        {/* GET from Redux */}
        <CoursesGrid handleCourseDetails={handleCourseDetails} />
      </div>
    </div>
  );
};

export default KeralaPsc;