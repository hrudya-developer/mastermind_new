import mocktest1 from '@/assets/mocktest.png';
import { useState } from 'react';
import { FaQuestion, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { Link, useSearchParams } from 'react-router-dom';
import { GiGraduateCap } from "react-icons/gi";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineGppGood } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Mocktest = () => {

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [activeLevel, setActiveLevel] = useState("all");

  const mtFeatures = [
    {
      image: mocktest1,
      examType: "kerala-psc",
      level: "10th",
      mainHeading: "LD Clerk Examination",
      qusCount: "25",
      time: "60 minutes",
      attempt: "Attempted",
      score: "78%",
      buttonText1: "Start Test",
    },
    {
      image: mocktest1,
      examType: "kerala-psc",
      level: "12th",
      mainHeading: "LD Clerk Examination",
      qusCount: "25",
      time: "60 minutes",
      attempt: "Not Started",
      score: "0%",
      buttonText1: "Start Test",
    },
    {
      image: mocktest1,
      examType: "kerala-psc",
      level: "degree",
      mainHeading: "LD Clerk Examination",
      qusCount: "25",
      time: "60 minutes",
      attempt: "In Progress",
      score: "42%",
      buttonText1: "Resume Test",
    },
    {
      image: mocktest1,
      examType: "ssc",
      level: "degree",
      mainHeading: "SSC Examination",
      qusCount: "25",
      time: "60 minutes",
      attempt: "Not Started",
      score: "0%",
      buttonText1: "Start Test",
    },
    {
      image: mocktest1,
      examType: "rrb",
      level: "12th",
      mainHeading: "RRB Examination",
      qusCount: "25",
      time: "60 minutes",
      attempt: "Not Started",
      score: "0%",
      buttonText1: "Start Test",
    },
  ];

  // ✅ FILTER
  const filteredTests = mtFeatures.filter((item) => {

    const matchCategory = category
      ? item.examType === category
      : true;

    const matchLevel =
      activeLevel === "all"
        ? true
        : item.level?.toLowerCase() === activeLevel.toLowerCase();

    return matchCategory && matchLevel;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      {/* LEFT SIDEBAR */}
      <div className="flex flex-col gap-2 border shadow-md p-3 rounded-md relative">

        <h3 className="my-2 flex justify-between">
          <span className="text-sm font-semibold mt-2">Filter by Level</span>
          <span className="bg-red-100 text-gray-800 p-2 rounded-full">
            <IoFilterOutline />
          </span>
        </h3>

        <button
          onClick={() => setActiveLevel("all")}
          className={`bg-blue-100 p-3 rounded-md flex items-center text-sm gap-3 ${
            activeLevel === "all" ? "ring-2 ring-blue-400" : ""
          }`}
        >
          <GiGraduateCap className="text-blue-600 text-xl" />
          Show all
        </button>

        <button
          onClick={() => setActiveLevel("10th")}
          className={`bg-green-100 p-3 rounded-md flex items-center text-sm gap-3 ${
            activeLevel === "10th" ? "ring-2 ring-green-400" : ""
          }`}
        >
          <GiGraduateCap className="text-green-600 text-xl" />
          10th Level
        </button>

        <button
          onClick={() => setActiveLevel("12th")}
          className={`bg-orange-100 p-3 rounded-md flex items-center text-sm gap-3 ${
            activeLevel === "12th" ? "ring-2 ring-orange-400" : ""
          }`}
        >
          <GiGraduateCap className="text-orange-600 text-xl" />
          12th Level
        </button>

        <button
          onClick={() => setActiveLevel("degree")}
          className={`bg-purple-100 p-3 rounded-md flex items-center text-sm gap-3 ${
            activeLevel === "degree" ? "ring-2 ring-purple-400" : ""
          }`}
        >
          <GiGraduateCap className="text-purple-600 text-xl" />
          Degree Level
        </button>

        {/* Bottom box */}
      <div className="flex flex-col sm:flex-row gap-2 border border-gray-200 bg-gray-50 p-3 rounded-md mt-10 absolute bottom-5 left-2 right-2">
  <div><MdOutlineGppGood className="text-green-600"/></div>
  <div className="text-xs text-gray-700">Quality Mock tests for better practice and higher success</div>
</div>
      </div>

  <div className="md:col-span-3">

  {/* SECTION HEADER */}
 

  {/* CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

    {filteredTests.map((itm, index) => {

      const scoreValue = parseInt(itm.score);

      return (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-50 hover:shadow-md transition overflow-hidden shadow-md"
        >

          {/* IMAGE + BADGE */}
          <div className="relative">
            <img src={itm.image} className="w-full h-40 object-cover" />

            {/* <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              {itm.examType.toUpperCase()}
            </span> */}
          </div>

          {/* CONTENT */}
          <div className="p-4">

            {/* TITLE */}
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              📄 {itm.mainHeading}
            </h3>

            {/* INFO BOXES */}
            <div className="grid grid-cols-2 gap-3 mb-6">

              <div className="bg-orange-100 rounded-lg p-2 text-xs flex items-center gap-2">
             
                <div>
                  <p className="text-gray-900 text-xs mb-2">Questions : </p>
                  <p className="text-xs text-orange-700">{itm.qusCount}</p>
                </div>
              </div>

              <div className="bg-purple-100 rounded-lg p-2 text-xs flex items-center gap-2">
              
                <div>
                  <p className="text-gray-900 text-xs mb-2">Duration</p>
                  <p className="text-xs text-purple-600">{itm.time}</p>
                </div>
              </div>

            </div>

            {/* STATUS */}
            <div className="my-3">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium
                ${
                  itm.attempt === "Attempted"
                    ? "bg-green-100 text-green-600"
                    : itm.attempt === "In Progress"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {itm.attempt}
              </span>
            </div>

            {/* PROGRESS */}
            <div className="mb-3">

              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    itm.attempt === "Attempted"
                      ? "bg-green-500"
                      : itm.attempt === "In Progress"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                  style={{ width: `${scoreValue}%` }}
                ></div>
              </div>

              <p className="text-xs text-right mt-1 text-gray-600">
                {itm.attempt === "Attempted"
                  ? `${itm.score}`
                  : itm.attempt === "In Progress"
                  ? `${itm.score}`
                  : "0%"}
              </p>

            </div>

            {/* SCORE / MESSAGE */}
            <div className="mb-4">
              {itm.attempt === "Attempted" ? (
                <div className="bg-green-50 text-green-700 text-xs p-2 rounded-lg">
                  Score: {itm.score}
                </div>
              ) : itm.attempt === "In Progress" ? (
                <div className="bg-blue-50 text-blue-700 text-xs p-2 rounded-lg">
                  Completed: {itm.score}
                </div>
              ) : (
                <div className="bg-orange-50 text-orange-600 text-xs p-2 rounded-lg">
                  You haven't started yet
                </div>
              )}
            </div>

            {/* BUTTON */}
            <Link
              to={`/tryMocktest?exam=${itm.examType}&topic=General Knowledge`}
              className={`w-full flex justify-center items-center gap-2 py-2 rounded-lg text-sm font-medium transition
                ${
                  itm.attempt === "Not Started"
                    ? "border border-blue-500 text-blue-600 hover:bg-blue-50"
                    : "bg-[rgb(var(--primary))] text-white hover:bg-[rgb(var(--secondary))]"
                }`}
            >
              {itm.buttonText1}
              <FaRegArrowAltCircleRight />
            </Link>

          </div>
        </div>
      );
    })}

  </div>

  {/* TIP BOX */}
  <div className="mt-6 bg-blue-50 border rounded-xl p-4 flex items-center gap-3">
    ⭐
    <p className="text-sm text-gray-700">
      <span className="font-medium">Tip:</span> Regular practice improves your performance.
      Keep going and achieve your goals!
    </p>
  </div>

</div>
    </div>
  );
};

export default Mocktest;