"use client";

import React, { useEffect, useState } from "react";
import Introduction from "@/app/components/home";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Work from "./components/work";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  const renderTab = () => {
    switch (activeTab) {
      case "About":
        return <Introduction />;
      case "Work":
        return <Work />;
      case "Projects":
        return <Projects />
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };


  const getLinkStyleName = (tabName: string) => {
    return "cursor-pointer hover:text-amber-300 transition-colors " + (tabName === activeTab ? "text-amber-400" : "text-gray-400");
  };

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 relative">
      {/* Fixed Navigation Bar */}
      <header className="fixed top-0 left-0 w-full py-4 flex justify-center z-20">
        <div className="bg-black text-amber-50 rounded-full px-6 py-2 flex items-center space-x-6 shadow-md">
          <a onClick={() => setActiveTab("About")} className={getLinkStyleName("About")}>About</a>
          <a onClick={() => setActiveTab("Work")} className={getLinkStyleName("Work")}>Work</a>
          <a onClick={() => setActiveTab("Projects")} className={getLinkStyleName("Projects")}>Projects</a>
          <a onClick={() => setActiveTab("Contact")} className={getLinkStyleName("Contact")}>Contact</a>
        </div>
      </header>

      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-gradient-to-b from-amber-100 to-transparent z-0"></div>

      {/* Main Content - Added padding-top to prevent content from hiding under the navbar */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20 relative z-10">
        <div className="max-w-6xl w-full">
          {renderTab()}
        </div>
      </main>
    </div>
  );
}
