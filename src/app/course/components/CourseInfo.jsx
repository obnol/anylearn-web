import React, { useState } from "react";
import DetailsPage from './DetailsPage';
import ExperiencePage from './ExperiencePage';
import { BsCalendarRange } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdLocationCity } from "react-icons/md";

const CourseInfo = () => {
  const [tab, setTab] = useState("details");

  return (
    <div>
      <div className="flex flex-col m-5">
        <div className="flex flex-row h-10 items-center">
          <img
            src="https://picsum.photos/256"
            className="h-full rounded-full mr-5"
          />
          <div>
            <p className="font-medium">Universitat Politècnica de Catalunya</p>
            <p className="font-light">Facultad de Informática de Barcelona</p>
          </div>
        </div>
        <p className="font-semibold text-2xl mt-5">
          Grado de ingenieria informática
        </p>
        <div className="flex flex-col mt-4 items-center text-slate-500">
          <div className="flex flex-row w-full space-x-3">
            <MdLocationCity className="text-xl" />
            <span>Barcelona, España</span>
          </div>
          <div className="flex flex-row space-x-16 mt-2 w-full">
            <div className="flex flex-row space-x-3">
              <BsCalendarRange className="text-xl" />
              <span>6 meses</span>
            </div>
            <div className="flex flex-row space-x-3">
              <GoLocation className="text-xl" />
              <span>A 245 Km</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-6 mb-2 text-xl text-center">
        <div
          id="details-tab-button-text"
          onClick={() => setTab("details")}
          className={`w-full ${tab === "details" ? "font-semibold" : "text-gray-500"}`}
        >
          Detalles
        </div>
        <div
          id="experience-tab-button-text"
          onClick={() => setTab("experience")}
          className={`w-full ${tab === "experience" ? "font-semibold" : "text-gray-500"}`}
        >
          Experiencia
        </div>
      </div>
      <div className="flex justify-center">
        <div className={`w-full border-b-4 ${tab === "details" ? "border-anylearn-accent" : ""}`}></div>
        <div className={`w-full border-b-4 ${tab === "experience" ? "border-anylearn-accent" : ""}`}></div>
      </div>
      <div className="flex flex-col ml-5 mr-5 mt-3">
        <div id="details-tab" className={`${tab === "details" ? "" : "hidden"}`}>
          <DetailsPage/>
        </div>
        <div id="experience-tab" className={`${tab === "experience" ? "" : "hidden"}`}>
          <ExperiencePage/>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
