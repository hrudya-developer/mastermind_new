import { FaDownload } from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import { GiGraduateCap } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import { useLocation } from "react-router-dom";

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

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const result = await axios.get("http://localhost:4000/api/pdfs");

        const data =
          result.data?.pdfs ||
          result.data?.data ||
          result.data;

        setPdfs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log(error);
        setPdfs([]);
      }
    };

    fetchPdf();
  }, []);

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
        <div className="flex flex-col gap-2 border border-gray-100 p-3 rounded-md">

          <button
            onClick={() => setActiveTab("all")}
            className={`bg-blue-100 p-3 rounded-md flex items-center gap-2 ${
              activeTab === "all" ? "ring-2 ring-blue-400" : ""
            }`}
          >
            <GiGraduateCap className="text-blue-600 text-xl" />
            Show all
          </button>

          <button
            onClick={() => setActiveTab("10th")}
            className={`bg-green-100 p-3 rounded-md flex items-center gap-2 ${
              activeTab === "10th" ? "ring-2 ring-green-400" : ""
            }`}
          >
            <GiGraduateCap className="text-green-600 text-xl" />
            10th Level
          </button>

          <button
            onClick={() => setActiveTab("12th")}
            className={`bg-orange-100 p-3 rounded-md flex items-center gap-2 ${
              activeTab === "12th" ? "ring-2 ring-orange-400" : ""
            }`}
          >
            <GiGraduateCap className="text-orange-600 text-xl" />
            12th Level
          </button>

          <button
            onClick={() => setActiveTab("degree")}
            className={`bg-purple-100 p-3 rounded-md flex items-center gap-2 ${
              activeTab === "degree" ? "ring-2 ring-purple-400" : ""
            }`}
          >
            <GiGraduateCap className="text-purple-600 text-xl" />
            Degree Level
          </button>
        </div>

        {/* Content */}
        <div className="md:col-span-3">

       

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPdfs.length > 0 ? (
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

                  {/* <button
                    onClick={() =>
                      handleDownload(item.url, item.name || "file.pdf")
                    }
                    className="bg-[rgb(var(--secondary))] text-white p-2 mt-5 rounded-full size-11 grid place-items-center mx-auto"
                  >
                    <FaDownload />
                  </button> */}
                </div>
              ))
            ) : (
              <p className="col-span-full text-center">
                No PDFs found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pyq;