import React from 'react';
import Accomodation from './Accomodation';

const accomodations = [
  {
    img: 'https://picsum.photos/300',
    name: 'Sarrià Apartments',
    price: {
      amount: 1500,
      period: 'mes',
    },
    valoration: {
      points: '8,9',
      quality: 'Fabuloso',
      comments: 212,
    },
    location: 'Barcelona',
    description: '2 dormitorios · 1 sala de estar · 1 baño · 1 cocina',
  },
  {
    img: 'https://picsum.photos/300',
    name: 'Stylish Aparments',
    price: {
      amount: 1000,
      period: 'mes',
    },
    valoration: {
      points: '7,6',
      quality: 'Bien',
      comments: 123,
    },
    location: 'Badalona',
    description: '2 habitaciones · 1 sala de estar · 1 baño · 1 cocina',
  },
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
  },
];

const ExperienceTab = () => {
  return (
    <>
      <div className='text-center mb-2'>
        <p className=' text-xl'>
          Alojamiento en <span className='font-bold'>Barcelona</span>
        </p>
        <p className='text-xs'>
          Powered by <span className='font-bold text-[#23387E]'>Booking</span>
        </p>
      </div>
      <div className='flex flex-col'>
        {accomodations.map((accomodation) => (
          <Accomodation key={accomodation.name} {...accomodation} />
        ))}
      </div>
    </>
  );
};

export default ExperienceTab;
