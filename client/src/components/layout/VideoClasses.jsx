import React, { useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineGppGood } from "react-icons/md";
import { CalendarDays, GraduationCap } from "lucide-react";

const VideoClasses = () => {
  const [activeLevel, setActiveLevel] = useState("all");

  const video = [
    {
      image:
        "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1151967132.jpg?itok=uWaiKr09",
      title: "KTET 2 SOCIAL SCIENCE!",
      date: "June 26th, 2025",
      level: "10th",
      duration: "12:30",
    },
    {
      image:
        "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1151967132.jpg?itok=uWaiKr09",
      title: "PSC GK Rapid Revision",
      date: "June 26th, 2025",
      level: "12th",
      duration: "10:15",
    },
    {
      image:
        "https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1151967132.jpg?itok=uWaiKr09",
      title: "Math Tricks for Exam",
      date: "June 26th, 2025",
      level: "degree",
      duration: "15:00",
    },
  ];

  // FILTER
  const filteredVideos =
    activeLevel === "all"
      ? video
      : video.filter((v) => v.level?.toLowerCase() === activeLevel);

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
            Quality video classes for better preparation and success.
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredVideos.map((vdo, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-50 hover:shadow-md transition overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={vdo.image}
                className="w-full h-44 object-cover"
                alt={vdo.title}
              />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 p-3 rounded-full">
                  <FaPlay className="text-gray-700" />
                </div>
              </div>

              {/* DURATION */}
              <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {vdo.duration}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 line-clamp-2 text-[rgb(var(--secondary))]">
                {vdo.title}
              </h3>

              <div className="flex flex-col justify-between text-xs text-gray-500 mb-3">
                <div className="py-2 flex gap-3 items-center">
                  <span><CalendarDays className="text-green-400"/></span>
                  <span className="text-gray-900">{vdo.date}</span></div>
                <div className="py-2 flex gap-3 items-center">
                  <span><GraduationCap className="text-orange-400" /> </span>
                  <span className="text-gray-900">Level: {vdo.level}</span></div>
              </div>

              <button className="w-full bg-[rgb(var(--primary))] text-white p-2 rounded-lg text-sm font-medium hover:opacity-90">
                Watch Now →
              </button>
            </div>
          </div>
        ))}

        {filteredVideos.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No Videos Found
          </p>
        )}

      </div>
    </div>
  );
};

export default VideoClasses;