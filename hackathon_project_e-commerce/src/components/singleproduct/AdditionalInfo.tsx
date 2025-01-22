
"use client";
import { useState } from "react";

const AdditionalInfo = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="mt-12">
      <div className="flex space-x-8 border-b">
        {["Description", "Additional Information", "Reviews"].map((tab) => (
          <button
            key={tab}
            className={`py-2 ${
              activeTab === tab
                ? "border-b-2 border-black font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {activeTab === "Description" && <p> Embodying the raw, wayward spirit of rock  roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound             of Marshall, unplugs the chords, and takes the show on the road</p>}
        {activeTab === "Additional Information" && (
          <p> Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        )}
        {activeTab === "Reviews" && <p>Reviews section...</p>}
      </div>
    </div>
  );
};

export default AdditionalInfo;

