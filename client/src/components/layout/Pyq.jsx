import { FaDownload } from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { TbHandFingerRight } from "react-icons/tb";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineGppGood } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
const Pyq = () => {
  const [pdfs, setPdfs] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // ✅ GET DATA FROM URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const category = params.get("category");
  const tab = params.get("tab") || "pyq"; // ✅ fallback fix

  // ✅ FORMAT CATEGORY (kerala-psc → Kerala PSC)
  const formatText = (text) => {
    if (!text) return "";
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // ✅ FORMAT TAB (pyq → PYQ)
  const formatTab = (text) => {
    if (!text) return "";

    switch (text.toLowerCase()) {
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

  const formatLevel = (level) => {
  if (!level || level === "all") return "";

  switch (level) {
    case "10th":
      return "10th Level";
    case "12th":
      return "12th Level";
    case "degree":
      return "Degree Level";
    default:
      return level;
  }
};

 

  // const handleDownload = async (url, filename) => {
  //   try {
  //     const response = await fetch(url);
  //     const blob = await response.blob();

  //     const downloadUrl = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");

  //     a.href = downloadUrl;
  //     a.download =
  //       filename?.replace(/[^a-zA-Z0-9._-]/g, "_") || "file.pdf";

  //     document.body.appendChild(a);
  //     a.click();

  //     a.remove();
  //     window.URL.revokeObjectURL(downloadUrl);
  //   } catch (err) {
  //     console.log("Download failed:", err);
  //   }
  // };

  // ✅ FILTER
  const filteredPdfs = pdfs.filter((item) => {
    const matchCategory = category
      ? item.category?.toLowerCase() === category.toLowerCase()
      : true;

    const matchLevel =
      activeTab === "all"
        ? true
        : item.level?.toLowerCase() === activeTab.toLowerCase();

    return matchCategory && matchLevel;
  });

  return (
    <div>

 

 

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Sidebar */}
        <div className="flex flex-col gap-2 border shadow-md p-3 rounded-md relative">
          <h3 className="my-2 flex justify-between"><span className="text-black-500 text-sm font-semibold mt-2">Filter by Level </span>

            <span className="bg-red-100 text-gray-800 p-2 rounded-full"><IoFilterOutline /></span>
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
            className={`bg-green-100 p-3 rounded-md flex text-sm items-center gap-3 ${
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



<div className="flex flex-col sm:flex-row gap-2 border border-gray-200 bg-gray-50 p-3 rounded-md mt-10 absolute bottom-5 left-2 right-2">
  <div><MdOutlineGppGood className="text-green-600"/></div>
  <div className="text-xs text-gray-700">Quality PYQs for better practice and higher success</div>
</div>


        </div>

        {/* Content */}
        <div className="md:col-span-3">

       

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* {filteredPdfs.length > 0 ? (
              filteredPdfs.map((item, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-md bg-gray-50 flex flex-col justify-between"
                >
                  <div>
                   

                   

                    <h4 className="text-sm text-center my-3">
                      Civil Excise Office Driver
                    </h4>

                    <h4 className="text-xs">{item.title}</h4>
                    <h4 className="text-xs">{item.year}</h4>

                    <h3 className="text-xs text-center break-words">
                      {item.name}
                    </h3>
                  </div>

                
                </div>
              ))
            ) : (
              <p className="col-span-full text-center">
                No PDFs found
              </p>
                          )} */}

                       

                        <div className="border border-gray-100 p-5 rounded-lg shadow-md bg-blue-50">
                          <div className="flex justify-end">
                         
                           
                             
                            <button className="p-1 text-xs flex justify-between items-center gap-1 border border-blue-400 rounded-md">
                              <span className="grid place-items-center">
                                <TbHandFingerRight className="text-blue-500 text-xl"/></span>
                                <span className="text-xs text-blue-500">Try Free Test</span>
                                
                                </button></div>
                                <div><span className="">
                                <GrDocumentText className="text-2xl text-purple-400 my-5" /></span></div>
                          <div>
                              
                             <span className="text-sm text-[rgb(var(--secondary))] font-semibold p-1 block">Kerala PSC</span>
                          
                            <span className="text-sm p-1 py-3 flex gap-2"><span><GiGraduateCap className="text-red-500 text-xl"/></span>Degree Level</span>
                          </div>
                          <div>
                            <p className="text-sm p-1 py-2 flex gap-2"><span className=""><RiUser3Line className="text-orange-500 text-xl"/></span>Civil Police Officer</p>
                          
                          </div>

                             <div className="flex gap-2 mt-4">
                            <div className="text-xs bg-blue-100 p-2 rounded-md">100 Questions</div>
                             <div className="text-xs bg-pink-100 p-2 rounded-md">100 Marks</div>
                          </div>


                          <div className="mt-6">
                            <button type="button" className="flex gap-2 items-baseline bg-[rgb(var(--primary))] p-2 px-3 text-white rounded-md hover:cursor-pointer hover:bg-gray-950">
                             
                             <span className="text-sm">Start exams</span>  <span className="text-xs"><FaArrowUpRightFromSquare /></span></button>
                          </div>
                       
                          
                        </div>

<div className="border border-gray-100 p-5 rounded-lg shadow-md bg-yellow-50">
                          <div className="flex justify-end">
                         
                           
                             
                            <button className="p-1 text-xs flex justify-between items-center gap-1 border border-yellow-400 rounded-md">
                              <span className="grid place-items-center">
                                <MdOutlineWorkspacePremium className="text-yellow-500 text-xl"/></span>
                                <span className="text-xs text-yello-500">Premium</span>
                                
                                </button></div>
                                <div><span className="">
                                <GrDocumentText className="text-2xl text-purple-400 my-5" /></span></div>
                          <div>
                              
                             <span className="text-sm text-[rgb(var(--secondary))] font-semibold p-1 block">Kerala PSC</span>
                          
                            <span className="text-sm p-1 py-3 flex gap-2"><span><GiGraduateCap className="text-red-500 text-xl"/></span>Degree Level</span>
                          </div>
                          <div>
                            <p className="text-sm p-1 py-2 flex gap-2"><span className=""><RiUser3Line className="text-orange-500 text-xl"/></span>Civil Police Officer</p>
                          
                          </div>

                             <div className="flex gap-2 mt-4">
                            <div className="text-xs bg-blue-100 p-2 rounded-md">100 Questions</div>
                             <div className="text-xs bg-pink-100 p-2 rounded-md">100 Marks</div>
                          </div>


                          <div className="mt-6">
                            <button type="button" className="flex gap-2 items-baseline bg-yellow-500 p-2 px-3 text-white rounded-md hover:cursor-pointer hover:bg-gray-950">
                             
                             <span className="text-sm">Start exams</span>  <span className="text-xs"><FaArrowUpRightFromSquare /></span></button>
                          </div>
                       
                          
                        </div>

                         <div className="border border-gray-100 p-5 rounded-lg shadow-md bg-blue-50">
                          <div className="flex justify-end">
                         
                           
                             
                            <button className="p-1 text-xs flex justify-between items-center gap-1 border border-blue-400 rounded-md">
                              <span className="grid place-items-center">
                                <TbHandFingerRight className="text-blue-500 text-xl"/></span>
                                <span className="text-xs text-blue-500">Try Free Test</span>
                                
                                </button></div>
                                <div><span className="">
                                <GrDocumentText className="text-2xl text-purple-400 my-5" /></span></div>
                          <div>
                              
                             <span className="text-sm text-[rgb(var(--secondary))] font-semibold p-1 block">Kerala PSC</span>
                          
                            <span className="text-sm p-1 py-3 flex gap-2"><span><GiGraduateCap className="text-red-500 text-xl"/></span>Degree Level</span>
                          </div>
                          <div>
                            <p className="text-sm p-1 py-2 flex gap-2"><span className=""><RiUser3Line className="text-orange-500 text-xl"/></span>Civil Police Officer</p>
                          
                          </div>

                             <div className="flex gap-2 mt-4">
                            <div className="text-xs bg-blue-100 p-2 rounded-md">100 Questions</div>
                             <div className="text-xs bg-pink-100 p-2 rounded-md">100 Marks</div>
                          </div>


                          <div className="mt-6">
                            <button type="button" className="flex gap-2 items-baseline bg-[rgb(var(--primary))] p-2 px-3 text-white rounded-md hover:cursor-pointer hover:bg-gray-950">
                             
                             <span className="text-sm">Start exams</span>  <span className="text-xs"><FaArrowUpRightFromSquare /></span></button>
                          </div>
                       
                          
                        </div>
                        <div className="border border-gray-100 p-5 rounded-lg shadow-md bg-yellow-50">
                          <div className="flex justify-end">
                         
                           
                             
                            <button className="p-1 text-xs flex justify-between items-center gap-1 border border-yellow-400 rounded-md">
                              <span className="grid place-items-center">
                                <MdOutlineWorkspacePremium className="text-yellow-500 text-xl"/></span>
                                <span className="text-xs text-yello-500">Premium</span>
                                
                                </button></div>
                                <div><span className="">
                                <GrDocumentText className="text-2xl text-purple-400 my-5" /></span></div>
                          <div>
                              
                             <span className="text-sm text-[rgb(var(--secondary))] font-semibold p-1 block">Kerala PSC</span>
                          
                            <span className="text-sm p-1 py-3 flex gap-2"><span><GiGraduateCap className="text-red-500 text-xl"/></span>Degree Level</span>
                          </div>
                          <div>
                            <p className="text-sm p-1 py-2 flex gap-2"><span className=""><RiUser3Line className="text-orange-500 text-xl"/></span>Civil Police Officer</p>
                          
                          </div>

                             <div className="flex gap-2 mt-4">
                            <div className="text-xs bg-blue-100 p-2 rounded-md">100 Questions</div>
                             <div className="text-xs bg-pink-100 p-2 rounded-md">100 Marks</div>
                          </div>


                          <div className="mt-6">
                            <button type="button" className="flex gap-2 items-baseline bg-yellow-500 p-2 px-3 text-white rounded-md hover:cursor-pointer hover:bg-gray-950">
                             
                             <span className="text-sm">Start exams</span>  <span className="text-xs"><FaArrowUpRightFromSquare /></span></button>
                          </div>
                       
                          
                        </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Pyq;