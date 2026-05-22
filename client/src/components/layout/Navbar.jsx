import { useState, useEffect, useContext, useRef } from "react";
import logo64 from "@/assets/logo-64.png";
import logo128 from "@/assets/logo-128.png";
import logo256 from "@/assets/logo-256.png";
import "@/index.css";
import TopScrollingText from "./TopScrollingText";
import { ModalContext } from "@/context/ModalContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { openLogin } = useContext(ModalContext);

  const [studentOpen, setStudentOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  // ✅ UPDATED STATES
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  const studentRef = useRef(null);
  const coursesRef = useRef(null);
  const exploreRef = useRef(null);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (studentRef.current && !studentRef.current.contains(e.target)) {
        setStudentOpen(false);
      }
      if (coursesRef.current && !coursesRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
      if (exploreRef.current && !exploreRef.current.contains(e.target)) {
        setExploreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white shadow-[0_2px_4px_rgba(0,0,0,0.03)]"
      }`}
    >
      <TopScrollingText />

      {/* HEADER */}
      <div
        className={`flex items-center justify-between max-w-7xl mx-auto px-8 md:px-10 lg:px-24 xl:px-28 2xl:px-36 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* LOGO */}
        <img
          src={logo128}
          srcSet={`${logo64} 64w, ${logo128} 128w, ${logo256} 256w`}
          sizes="(max-width:640px) 64px, (max-width:1024px) 128px, 256px"
          alt="Logo"
          className={`w-auto transition-all duration-300 ${
            scrolled ? "h-12" : "h-16 sm:h-18 lg:h-20"
          }`}
        />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-5 sm:gap-5 md:gap-5 text-[14px] md:text-[14px] lg:text-base">

          <a href="/" className="text-[rgb(var(--secondary))]">Home</a>
          <a href="#about" className="text-[rgb(var(--secondary))]">About</a>

          {/* COURSES */}
          <div className="relative" ref={coursesRef}>
            <button onClick={() => setCoursesOpen(!coursesOpen)}>
              Courses ▾
            </button>

            {coursesOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-44 py-2">
                <Link to="/courses/kerala-psc" onClick={() => setCoursesOpen(false)} className="block px-4 py-2 hover:bg-[rgb(var(--primary))] hover:text-white text-sm">
                  Kerala PSC
                </Link>
                <Link to="/courses/rrb" onClick={()=>setCoursesOpen(false)} className="block px-4 py-2 hover:bg-[rgb(var(--primary))] hover:text-white text-sm">
                  RRB
                </Link>
                <Link to="/courses/ssc" onClick={()=>setCoursesOpen(false)} className="block px-4 py-2 hover:bg-[rgb(var(--primary))] hover:text-white text-sm">
                  SSC
                </Link>
              </div>
            )}
          </div>

          {/* STUDENT */}
          <div className="relative" ref={studentRef}>
            <button onClick={() => setStudentOpen(!studentOpen)}>
              Student Zone ▾
            </button>

            {studentOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-44 py-2 flex flex-col px-2">

                <button onClick={() => { setSelectedTab("pyq"); setShowCategoryModal(true); setStudentOpen(false); }}
                  className="hover:bg-[rgb(var(--primary))] p-2 hover:text-white text-left">
                  PYQ
                </button>

                <button onClick={() => { setSelectedTab("mock"); setShowCategoryModal(true); setStudentOpen(false); }}
                  className="hover:bg-[rgb(var(--primary))] p-2 hover:text-white text-left">
                  Mock Test
                </button>

                <button onClick={() => { setSelectedTab("current"); setShowCategoryModal(true); setStudentOpen(false); }}
                  className="hover:bg-[rgb(var(--primary))] p-2 hover:text-white text-left">
                  Current Affairs
                </button>

                <button onClick={() => { setSelectedTab("syllabus"); setShowCategoryModal(true); setStudentOpen(false); }}
                  className="hover:bg-[rgb(var(--primary))] p-2 hover:text-white text-left">
                  Syllabus
                </button>

                <button onClick={() => { setSelectedTab("video"); setShowCategoryModal(true); setStudentOpen(false); }}
                  className="hover:bg-[rgb(var(--primary))] p-2 hover:text-white text-left">
                  Video Classes
                </button>

                <button onClick={() => { setSelectedTab("study"); setShowCategoryModal(true); setStudentOpen(false); }}
                  className="hover:bg-[rgb(var(--primary))] p-2 hover:text-white text-left">
                  Study Materials
                </button>

              </div>
            )}
          </div>

          {/* EXPLORE */}
          <div className="relative" ref={exploreRef}>
            <button onClick={() => setExploreOpen(!exploreOpen)}>
              Explore ▾
            </button>

            {exploreOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-44 py-2">
                <a href="#gallery" className="block px-4 py-2 hover:bg-[rgb(var(--primary))] hover:text-white text-sm">Exam Notification</a>
                <a href="#events" className="block px-4 py-2 hover:bg-[rgb(var(--primary))] hover:text-white text-sm">Monthly Current Affairs Quiz</a>
                <a href="#blog" className="block px-4 py-2 hover:bg-[rgb(var(--primary))] hover:text-white text-sm">Latest News</a>
                <a href="#blog" className="block px-4 py-2 hover:bg-[rgb(var(--primary))] hover:text-white text-sm">Blogs</a>
              </div>
            )}
          </div>

          <a href="#contactForm" className="text-[rgb(var(--secondary))]">
            Contact
          </a>

          <Link to="/sendOtpLogin"><button className="px-4 py-2 bg-[rgb(5,23,106)] text-white rounded-md text-sm md:text-base hover:bg-[rgb(var(--primary))]"
          >
            Login
          </button></Link>

        </div>

        {/* MOBILE */}
        <button
          className="md:hidden space-y-1 bg-gray-100 p-2 rounded-sm"
          onClick={() => setOpen(!open)}
        >
          <span className={`block h-0.5 w-5 bg-black ${open && "rotate-45 translate-y-1.5"}`} />
          <span className={`block h-0.5 w-5 bg-black ${open && "opacity-0"}`} />
          <span className={`block h-0.5 w-5 bg-black ${open && "-rotate-45 -translate-y-1.5"}`} />
        </button>
      </div>

      {/* ✅ CATEGORY MODAL */}
      {showCategoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
          <div className="bg-white w-[90%] max-w-md rounded-lg p-6 relative">

            <button
              onClick={() => setShowCategoryModal(false)}
              className="absolute top-2 right-3 text-xl"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4 text-center">
              Select Category
            </h2>

            <div className="flex flex-col gap-3">

              <button
                onClick={() => {
                  navigate(`/tabs?tab=${selectedTab}&category=kerala-psc`);
                  setShowCategoryModal(false);
                }}
                className="p-3 rounded-md bg-blue-100 hover:bg-blue-200"
              >
                Kerala PSC
              </button>

              <button
                onClick={() => {
                  navigate(`/tabs?tab=${selectedTab}&category=rrb`);
                  setShowCategoryModal(false);
                }}
                className="p-3 rounded-md bg-green-100 hover:bg-green-200"
              >
                RRB
              </button>

              <button
                onClick={() => {
                  navigate(`/tabs?tab=${selectedTab}&category=ssc`);
                  setShowCategoryModal(false);
                }}
                className="p-3 rounded-md bg-orange-100 hover:bg-orange-200"
              >
                SSC
              </button>

            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;