import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineGppGood } from "react-icons/md";

const Syllabus = () => {
  const [activeTab, setActiveTab] = useState("all");

  const syllabus = [
    {
      heading: "Beat Forest Officer",
      type: "Kerala PSC",
      level: "10th",
    },
    {
      heading: "LDC Syllabus",
      type: "Kerala PSC",
      level: "12th",
    },
    {
      heading: "University Assistant",
      type: "Kerala PSC",
      level: "degree",
    },
    {
      heading: "Police Constable",
      type: "Kerala PSC",
      level: "10th",
    },
  ];

  const filteredSyllabus = syllabus.filter((item) =>
    activeTab === "all"
      ? true
      : item.level.toLowerCase() === activeTab.toLowerCase()
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* LEFT SIDEBAR */}
      <div className="flex flex-col gap-2 border shadow-md p-3 rounded-md relative min-h-[360px]">
        <h3 className="my-2 flex justify-between items-center">
          <span className="text-black text-sm font-semibold">
            Filter by Level
          </span>

          <span className="bg-red-100 text-gray-800 p-2 rounded-full">
            <IoFilterOutline />
          </span>
        </h3>

        <button
          onClick={() => setActiveTab("all")}
          className={`bg-blue-100 p-3 rounded-md flex items-center text-sm gap-3 ${
            activeTab === "all" ? "ring-2 ring-blue-400" : ""
          }`}
        >
          <GiGraduateCap className="text-blue-600 text-xl" />
          Show all
        </button>

        <button
          onClick={() => setActiveTab("10th")}
          className={`bg-green-100 p-3 rounded-md flex items-center text-sm gap-3 ${
            activeTab === "10th" ? "ring-2 ring-green-400" : ""
          }`}
        >
          <GiGraduateCap className="text-green-600 text-xl" />
          10th Level
        </button>

        <button
          onClick={() => setActiveTab("12th")}
          className={`bg-orange-100 p-3 rounded-md flex items-center text-sm gap-3 ${
            activeTab === "12th" ? "ring-2 ring-orange-400" : ""
          }`}
        >
          <GiGraduateCap className="text-orange-600 text-xl" />
          12th Level
        </button>

        <button
          onClick={() => setActiveTab("degree")}
          className={`bg-purple-100 p-3 rounded-md flex items-center text-sm gap-3 ${
            activeTab === "degree" ? "ring-2 ring-purple-400" : ""
          }`}
        >
          <GiGraduateCap className="text-purple-600 text-xl" />
          Degree Level
        </button>

        <div className="flex gap-2 border border-gray-200 bg-gray-50 p-3 rounded-md mt-auto">
          <MdOutlineGppGood className="text-green-600 text-lg shrink-0" />
          <div className="text-xs text-gray-700">
            Quality syllabus materials for better preparation and higher success.
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {filteredSyllabus.map((syll, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-md hover:shadow-lg transition overflow-hidden"
            >
              
              {/* TOP IMAGE AREA */}
              <div
                className={`relative h-36 bg-blue-100 ${syll.color} flex items-center justify-center`}
              >
                <span className="bg-white p-2 rounded-full shadow-md">   <GiGraduateCap className="text-5xl text-[rgb(var(--primary))]" /></span>
             

                {/* PDF ICON */}
                <div className="absolute top-3 right-3 bg-red-600 p-2 rounded-md text-white">
                  <BsFileEarmarkPdfFill />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-sm my-3">
                  {syll.heading}
                </h3>

                <p className="text-sm text-[rgb(var(--primary))] font-medium my-1">
                  {syll.type}
                </p>

                {/* LEVEL BADGE */}
                <div className="flex justify-center my-4">
                  <span className="bg-gray-100 px-3 p-2 text-xs rounded-md flex items-center gap-3 text-[rgb(var(--secondary))]">
                    <GiGraduateCap className="text-xs" />
                    Level: {syll.level}
                  </span>
                </div>

                {/* DOWNLOAD BUTTON */}
               
                <button
                  className={`${syll.btnColor} bg-[rgb(var(--secondary))] text-white p-3 rounded-full mx-auto mt-3 hover:scale-105 transition`}
                >
                  <FaDownload />
                </button>
              </div>
            </div>
          ))}

          {filteredSyllabus.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No Syllabus Found
            </p>
          )}
        </div></div>
    </div>
  );
};

export default Syllabus;