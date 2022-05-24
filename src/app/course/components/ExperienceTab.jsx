import React from "react";
import Accomodation from "./Accomodation";
import Activity from "./Activity";
import { useNavigate } from "react-router-dom";

const accomodations = [
  {
    img: "https://picsum.photos/306",
    name: "Sarrià Apartments",
    price: {
      amount: 1500,
      period: "mes",
    },
    valoration: {
      points: "8,9",
      quality: "Fabuloso",
      comments: 212,
    },
    location: "Barcelona",
    description: "2 dormitorios · 1 sala de estar · 1 baño · 1 cocina",
  },
  {
    img: "https://picsum.photos/305",
    name: "Stylish Aparments",
    price: {
      amount: 1000,
      period: "mes",
    },
    valoration: {
      points: "7,6",
      quality: "Bien",
      comments: 123,
    },
    location: "Badalona",
    description: "2 habitaciones · 1 sala de estar · 1 baño · 1 cocina",
  } /*,
  {
    img: 'https://picsum.photos/300',
    name: 'Teh Central Place',
    price: {
      amount: 300,
      period: 'semana',
    },
    valoration: {
      points: '7',
      quality: 'Bien',
      comments: 65,
    },
    location: 'Barcelona',
    description: '3 habitaciones · 1 sala de estar · 2 baños · 1 cocina',
  },
  {
    img: 'https://picsum.photos/300',
    name: 'VivoBarcelona Apartments',
    price: {
      amount: 1250,
      period: 'mes',
    },
    valoration: {
      points: '9,4',
      quality: 'Fantástico',
      comments: 212,
    },
    location: 'Barcelona',
    description:
      '2 dormitorios · 1 sala de estar · 1 baño · 1 cocina · terraza',
  },
  {
    img: 'https://picsum.photos/300',
    name: 'Castro Exclusive Residence',
    price: {
      amount: 1500,
      period: 'mes',
    },
    valoration: {
      points: '8,2',
      quality: 'Muy bien',
      comments: 54,
    },
    location: 'Barcelona',
    description: '4 habitaciones · 1 sala de estar · 2 baños · 1 cocina',
  },
  {
    img: 'https://picsum.photos/300',
    name: 'Rent Top Rambla Catalunya',
    price: {
      amount: 1500,
      period: 'mes',
    },
    valoration: {
      points: '6,5',
      quality: 'Agradable',
      comments: 98,
    },
    location: 'Barcelona',
    description: '2 dormitorios · 1 sala de estar · 1 baño · 1 cocina',
  },*/,
];

const activities = [
  {
    img: "https://picsum.photos/301",
    name: "Visita guiada museo",
    price: {
      amount: 1500,
      period: "mes",
    },
    valoration: {
      points: "9,2",
      quality: "Aprendizaje",
      comments: 54,
    },
    location: "Barcelona",
    description: "2 dormitorios · 1 sala de estar · 1 baño · 1 cocina",
  },
  {
    img: "https://picsum.photos/300",
    name: "Salida al parque natural",
    price: {
      amount: 1000,
      period: "mes",
    },
    valoration: {
      points: "8,8",
      quality: "Relajante",
      comments: 21,
    },
    location: "Badalona",
    description: "2 habitaciones · 1 sala de estar · 1 baño · 1 cocina",
  }
];

const ExperienceTab = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center mb-2">
        <p className=" text-2xl">
          Alojamiento en <span className="font-bold">Barcelona</span>
        </p>
        <p className="text-xs">
          Powered by <span className="font-bold text-[#23387E]">Booking</span>
        </p>
      </div>
      <div className="flex flex-col relative">
        <Accomodation key={accomodations[0].name} {...accomodations[0]} />
        <Accomodation key={accomodations[1].name} {...accomodations[1]} />
        <div className="h-40 w-full absolute bottom-0 z-30 bg-gradient-to-t from-white"></div>
        <div className="w-full absolute bottom-4 z-40 text-xl font-bold text-anylearn-blue-dark text-center" onClick={() => navigate(`/course/1/accommodations`)} >
          Ver más alojamientos...
        </div>
      </div>

      <div className="text-center my-2">
        <p className=" text-2xl">
          Actividades en <span className="font-bold">Barcelona</span>
        </p>
      </div>
      <div className="flex flex-col relative">
        <Activity key={activities[0].name} {...activities[0]} />
        <Activity key={activities[1].name} {...activities[1]} />
        <div className="h-40 w-full absolute bottom-0 z-30 bg-gradient-to-t from-white"></div>
        <div className="w-full absolute bottom-4 z-40 text-xl font-bold text-anylearn-blue-dark text-center" onClick={() => navigate(`/course/1/accommodations`)} >
          Ver más actividades...
        </div>
      </div>
    </>
  );
};

export default ExperienceTab;
