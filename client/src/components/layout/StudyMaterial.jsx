import { FaDownload } from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineGppGood } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";

const StudyMaterial = () => {
  const [activeLevel, setActiveLevel] = useState("all");

  const material = [
    {
      heading: "Beat Forest Officer",
      type: "Kerala PSC",
      level: "10th",
    },
    {
      heading: "LDC Study Material",
      type: "Kerala PSC",
      level: "12th",
    },
    {
      heading: "University Assistant Notes",
      type: "Kerala PSC",
      level: "degree",
    },
  ];

  // FILTER LOGIC
  const filteredMaterial =
    activeLevel === "all"
      ? material
      : material.filter(
          (item) => item.level?.toLowerCase() === activeLevel
        );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      {/* SIDEBAR */}
      <div className="flex flex-col gap-2 border shadow-md p-3 rounded-md min-h-[360px]">
        
        <h3 className="my-2 flex justify-between items-center">
          <span className="text-black text-sm font-semibold">
            Filter by Level
          </span>

          <span className="bg-red-100 text-gray-800 p-2 rounded-full">
            <IoFilterOutline />
          </span>
        </h3>

        {["all", "10th", "12th", "degree"].map((level) => (
          <button
            key={level}
            onClick={() => setActiveLevel(level)}
            className={`p-3 rounded-md flex items-center text-sm gap-3 ${
              activeLevel === level
                ? "ring-2 ring-blue-400 bg-blue-100"
                : "bg-gray-100"
            }`}
          >
            <GiGraduateCap className="text-lg" />
            {level === "all" ? "Show all" : `${level} Level`}
          </button>
        ))}

        <div className="flex gap-2 border border-gray-200 bg-gray-50 p-3 rounded-md mt-auto">
          <MdOutlineGppGood className="text-green-600 text-lg shrink-0" />
          <div className="text-xs text-gray-700">
            Quality syllabus materials for better preparation and higher success.
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredMaterial.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white shadow-md hover:shadow-lg transition overflow-hidden"
            >
              
              {/* TOP */}
              <div className="relative h-36 bg-purple-100 flex items-center justify-center">
                <span className="bg-white p-4 rounded-full shadow-md">
                  <GrDocumentText className="text-3xl text-[rgb(var(--primary))]" />
                </span>

                <div className="absolute top-3 right-3 bg-red-600 p-2 rounded-md text-white">
                  <BsFileEarmarkPdfFill />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-sm my-3">
                  {item.heading}
                </h3>

                <p className="text-sm text-[rgb(var(--primary))] font-medium my-1">
                  {item.type}
                </p>

                <div className="flex justify-center my-4">
                  <span className="bg-gray-100 px-3 py-2 text-xs rounded-md flex items-center gap-2 text-[rgb(var(--secondary))]">
                    <GiGraduateCap />
                    Level: {item.level}
                  </span>
                </div>

                <button className="bg-[rgb(var(--secondary))] text-white p-3 rounded-full mx-auto mt-3 hover:scale-105 transition">
                  <FaDownload />
                </button>
              </div>
            </div>
          ))}

          {filteredMaterial.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No Material Found
            </p>
          )}

        </div>
      </div>

    </div>
  );
};

export default StudyMaterial;