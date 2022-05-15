
import React, { useState } from "react";
import Dummy from '../../dummy.json'
import { FiFilter } from 'react-icons/fi';
import Animated from "../../commons/Animated";
import { Route } from "react-router-dom";

const Categories = ["Idiomas","Habilidades Personales","Tecnología","Historia y Antropología",
                    "Sostenibilidad","Comunicación","Arte y Diseño","Ciencias Médicas","Finanzas"];

                    //const Duration = ["1 mes","6 meses","1 año"]
//const Distance = ["Menos de 10 Kilómetros","Menos de 100 kilómetros","Más de 100 Kilómetros, dentro de España","Más de 100 Kilómetros, fuera de España"]

const submitValues =
{
    distance: 0,
    duration: 0,
    category: [false,false,false,false,false,false,false,false,false]
};

const onValueChange = (event) => {
    if (event.target.name === "distance") {
        submitValues.distance = event.target.value;
        console.log(submitValues.distance);
    }
    else if (event.target.name === "duration") {
        submitValues.duration = event.target.value;
    }
    else if (event.target.name === "category") {
        console.log(event.target.id);
        submitValues.category[event.target.id] = !submitValues.category[event.target.id]; 
    }
    console.log("Distance: "+submitValues.distance+" Duration: "+submitValues.duration+" Last changed category: "+submitValues.category[event.target.id]);
};

const handleSumbit = (event) => {
    //Añadir los filtros a la query del enlace
    //?distance=%2Cduration=%2Ccategories
    let query = "?distance="+submitValues.distance+"%2Cduration="+submitValues.duration;
        if (submitValues.category.find((cat) => {
            return cat == true; //si hay algún valor marcado, lo encuentra
        }))
        {
            let cat = "%2Ccategories=";
            for (const key in Categories) {
                if (submitValues.category[key]) 
                {
                    cat += Categories[key] + "&";
                }
            }
            query += (cat.slice(0,cat.length-1));
        }
    console.log("Resulting query: "+query);
    let URL = window.location.href.split("?");
    window.location.href = URL[0]+query;
};

const Filters = () => {
    const [display, setDisplay] = useState(true);
    return (
        <>
            <div
                className='btn h-8 w-24 m-5 border-primary border-2 px-2 py-1 text-xl cursor-pointer rounded-xl border-[#293241] bg-white-100'
                onClick={() => setDisplay( () => {
                    return !display}
                )}
            >
                <div className='flex justify-center items-end'>
                    <FiFilter />
                </div>
            </div>
            <div>
                {
                    display ? (
                            <div>
                                <div className='flex h-full w-full justify-center items-center  mb-2 mt-5'>
                                    <p className='font-medium text-m text-black'>Distancia</p>
                                </div>
                                <div className="flex justify-center" onChange={onValueChange}>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#3D5A80] checked:border-[#3D5A80] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="distance" type="radio" value={20} id="distance0" />
                                            <label className="form-check-label inline-block font-medium text-sm text-black">
                                                Menos de 20 kilómetros
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#3D5A80] checked:border-[#3D5A80] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="distance" type="radio" value={200} id="distance1" />
                                            <label className="form-check-label inline-block font-medium text-sm text-black">
                                                Menos de 200 kilómetros
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#3D5A80] checked:border-[#3D5A80] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="distance" type="radio" value={Number.MAX_VALUE} id="distance2" />
                                            <label className="form-check-label inline-block font-medium text-sm text-black">
                                                Más de 200 kilómetros
                                            </label>
                                        </div>
                                    </div>
                                </div>                           
                                <div className='flex h-full w-full justify-center items-center  mb-2 mt-5'>
                                    <p className='font-medium text-m text-black'>Duración</p>
                                </div>
                                <div className="flex justify-center" onChange={onValueChange}>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="duration" type="radio"  value={1} id="duration0" />
                                            <label className="form-check-label inline-block font-medium text-sm text-black">
                                                1 mes
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="duration" type="radio" value={3} id="duration1" />
                                            <label className="form-check-label inline-block font-medium text-sm text-black">
                                                3 meses
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="duration" type="radio" value={6} id="duration2" />
                                            <label className="form-check-label inline-block font-medium text-sm text-black">
                                                6 meses
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="duration" type="radio" value={12} id="duration3" />
                                            <label className="form-check-label inline-block font-medium text-sm text-black">
                                                1 año
                                            </label>
                                            
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" name="duration" type="radio" value={Number.MAX_VALUE} id="duration4" />
                                            <label className="form-check-label inline-block font-medium text-sm text-black">
                                                Más de 1 año
                                            </label>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='flex h-full w-full justify-center items-center mb-2 mt-5'>
                                    <p className='font-medium text-m text-black'>Categoría</p>
                                </div>
                                <div className="flex justify-center"  onChange={onValueChange}>
                                    <div>
                                        {
                                            Categories.map((item, key) => (
                                                <div className="form-check justify-center" key={key}>
                                                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name="category" value={item} id={key} />
                                                    <label className="form-check-label inline-block font-medium text-sm text-black">
                                                        {item}
                                                    </label>
                                                </div> 
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                <button className="flex my-10 rounded-lg bg-[#EE6C4D] border-2 items-center p-3" onClick={handleSumbit} type="submit">
                                    <p className='font-medium text-sm text-[#E0FBFC]'>Aplicar Cambios</p>
                                </button>
                                </div>
                            </div>
                    ) : (
                        <></>
                    )
                }
            </div>
        </>

    );
};

export default Filters;