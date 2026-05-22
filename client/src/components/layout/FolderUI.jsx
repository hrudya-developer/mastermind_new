import { useState } from "react";
import { CalendarDays, Folder, ChevronRight, FileText } from "lucide-react";

const FolderUI = () => {
  const [openFolder, setOpenFolder] = useState(null);

  const data = [
    { name: "January", year: "2026", children: ["LD Clerk Test", "Police Test"] },
    { name: "February", year: "2026", children: ["LD Clerk Test", "Police Test"] },
    { name: "March", year: "2026", children: ["LD Clerk Test", "Police Test"] },
    { name: "April", year: "2026", children: ["10th Level", "Degree Level"] },
  ];

  return (
    <div className="w-full bg-white rounded-md border border-gray-100 shadow-sm p-4 md:p-6">
      {/* Header */}
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-blue-50 to-sky-50 px-5 py-6 mb-6">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-xl bg-[rgb(var(--secondary))] flex items-center justify-center shadow-md">
            <CalendarDays className="text-white" size={26} />
          </div>

          <div>
            <h2 className="text-md md:text-xl text-[rgb(var(--secondary))] font-semibold">
              Daily Current Affairs
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Stay updated with the latest national and international news.
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-72 opacity-20 bg-[radial-gradient(circle_at_center,#3b82f6_1px,transparent_1px)] [background-size:10px_10px]" />
      </div>

      {/* Month Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((folder, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenFolder(openFolder === index ? null : index)}
              className="w-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all p-5 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center">
                  <Folder className="text-blue-600 fill-blue-500/20" size={30} />
                </div>

                <div>
                  <h3 className="text-slate-900 text-sm">
                    {folder.name}
                  </h3>
                  <p className="text-slate-500 text-base">{folder.year}</p>
                </div>
              </div>

              <ChevronRight
                className={`text-slate-900 transition-transform ${
                  openFolder === index ? "rotate-90" : ""
                }`}
                size={24}
              />
            </button>

            {openFolder === index && (
              <div className="mt-3 bg-blue-50/60 border border-blue-100 rounded-xl p-4">
                <ul className="space-y-2">
                  {folder.children.map((file, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <FileText size={16} className="text-blue-600" />
                      {file}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderUI;