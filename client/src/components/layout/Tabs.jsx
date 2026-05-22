import Navbar from "./Navbar";
import { MdHome } from "react-icons/md";
import Pyq from "./Pyq";
import Mocktest from "./Mocktest";
import CurrentAffairs from "./CurrentAffairs";
import Syllabus from "./Syllabus";
import VideoClasses from "./VideoClasses";
import StudyMaterial from "./StudyMaterial";
import { useSearchParams, useLocation } from "react-router-dom";
import bg_2 from "@/assets/bg_2.png";
import bg_3 from "@/assets/bg_tabs.png";
import { BiSpreadsheet } from "react-icons/bi";
import { PiComputerTowerLight } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { LuBookText } from "react-icons/lu";

const Tabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const activeTab = searchParams.get("tab") || "pyq";
  const category = searchParams.get("category") || "kerala-psc";

  // ✅ FORMAT CATEGORY
  const formatText = (text) => {
    if (!text) return "";
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // ✅ FORMAT TAB
  const formatTab = (text) => {
    if (!text) return "";

    switch (text?.toLowerCase()) {
      case "pyq":
        return "PYQ";
      case "mock":
        return "Mock Test";
      case "current":
        return "Current Affairs";
      case "syllabus":
        return "Syllabus";
      case "video":
        return "Video Classes";
      case "study":
        return "Study Materials";
      default:
        return text;
    }
  };

  return (
    <>
      <Navbar />

      <div className="container py-40 mx-auto max-w-7xl px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-36">

        {/* HEADER */}
        <div
          style={{ backgroundImage: `url(${bg_3})` }}
          className="p-8 rounded-lg bg-no-repeat shadow-sm bg-cover bg-center"
        >

          {/* ✅ BREADCRUMB (FIXED) */}
          <p className="text-sm mb-4 text-gray-500">
            Home <span className="mx-1">&gt;</span>
            Students Corner <span className="mx-1">&gt;</span>

            <span className="text-[rgb(var(--primary))] font-medium">
              {formatText(category)}
            </span>

            <span className="mx-1">&gt;</span>

            <span className="text-[rgb(var(--secondary))] font-medium">
              {formatTab(activeTab)}
            </span>
          </p>

          <h2 className="text-[clamp(26px,4.3vw,46px)] font-bold text-[rgb(var(--secondary))] py-3">
            Student Zone
          </h2>
          <p>All the essential study resources in one place.</p>
        </div>

        {/* TABS */}
        <div className="tabs tabs-border flex flex-wrap justify-center gap-5 mt-10 mb-5 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.15)] p-5">

          <button
            onClick={() => setSearchParams({ tab: "pyq", category })}
            className={`tab bg-gray-100 rounded-md px-2 ${activeTab === "pyq" ? "tab-active" : ""}`}
          ><span><BiSpreadsheet className="me-2 text-orange-600"/></span>
            PYQ
          </button>

          <button
            onClick={() => setSearchParams({ tab: "mock", category })}
            className={`tab bg-gray-100 rounded-md px-2 ${activeTab === "mock" ? "tab-active" : ""}`}
          ><span><PiComputerTowerLight className="me-2 text-emerald-600"/></span>
            Mock Test
          </button>

          <button
            onClick={() => setSearchParams({ tab: "current", category })}
            className={`tab bg-gray-100 rounded-md px-2 ${activeTab === "current" ? "tab-active" : ""}`}
          ><span><IoNewspaperOutline className="me-2 text-cyan-600"/></span>
            Current Affairs
          </button>

          <button
            onClick={() => setSearchParams({ tab: "syllabus", category })}
            className={`tab bg-gray-100 rounded-md px-2 ${activeTab === "syllabus" ? "tab-active" : ""}`}
          ><span><SlBookOpen className="me-3 text-blue-600"/></span>
            Syllabus
          </button>

          <button
            onClick={() => setSearchParams({ tab: "video", category })}
            className={`tab bg-gray-100 rounded-md px-2 ${activeTab === "video" ? "tab-active" : ""}`}
          >
           <span><MdOutlineVideoCameraFront className="me-3 text-green-600"/></span> Video Classes
          </button>

          <button
            onClick={() => setSearchParams({ tab: "study", category })}
            className={`tab bg-gray-100 rounded-md px-2 ${activeTab === "study" ? "tab-active" : ""}`}
          ><span><LuBookText className="me-2 text-violet-500"/></span>
            Study Materials
          </button>

        </div>

        {/* CONTENT */}
        <div className="pt-3">

          {(activeTab === "pyq" || !activeTab) && (
            <Pyq category={category} />
          )}

          {activeTab === "mock" && <Mocktest />}
          {activeTab === "current" && <CurrentAffairs />}
          {activeTab === "syllabus" && <Syllabus />}
          {activeTab === "video" && <VideoClasses />}
          {activeTab === "study" && <StudyMaterial />}

        </div>

      </div>
    </>
  );
};

export default Tabs;