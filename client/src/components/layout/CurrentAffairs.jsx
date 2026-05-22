import React, { useState } from "react";
import PscBulletinCa from "./PscBulletinCa";
import FolderUI from "./FolderUI";

const CurrentAffairs = () => {

  const [activeTab, setActiveTab] = useState("daily");

  const currentAffairsData = {
    daily: [
      {
        qtn: "1. നാസയുടെ ആർട്ടെമിസ്-2...",
        ans: "ക്രിസ്റ്റീന കോച്ച്"
      }
    ],
    psc: [
      {
        qtn: "PSC Question...",
        ans: "Answer"
      }
    ],
    weekly: [
      {
        qtn: "Weekly Question...",
        ans: "Answer"
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

      {/* ✅ SIDEBAR */}


      {/* ✅ CONTENT */}
      <div className="md:col-span-3">

    


<FolderUI />

      </div>
    </div>
  );
};

export default CurrentAffairs;