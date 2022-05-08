
import React, { useState } from "react";
import Dummy from '../../dummy.json'
import { FiFilter } from 'react-icons/fi';

var Categories = ["Blockchain","Liderazgo","Arqueología","Historia de las civilizaciones"];
var SearchResult = [];
//const Duration = ["1 mes","6 meses","1 año"]
//const Distance = ["Menos de 10 Kilómetros","Menos de 100 kilómetros","Más de 100 Kilómetros, dentro de España","Más de 100 Kilómetros, fuera de España"]

const submitValues =
{
    distance: 0,
    duration: 0,
    category: [false,false,false,false]
};

const onValueChange = (event) => {
    if (event.target.id === "distance") {
        submitValues.distance = event.target.value;
        console.log(submitValues.distance);
    }
    else if (event.target.id === "duration") {
        submitValues.duration = event.target.value;
    }
    else if (event.target.id === "category") {
        submitValues.category[event.target.id] = !submitValues.category[event.target.id]; 
    }
};

const onSubmit = (event) => {
    console.log("submitted!");
    
};

const Filters = () => {
    const [display, setDisplay] = useState(true);
    return (
        <>
            <div
                className='flex h-8 w-24 bg-blue-500 justify-center items-center rounded-lg'
                onClick={() => setDisplay(!display)}
            >
                <div className='flex h-full w-full justify-center items-center'>
                    <FiFilter />
                </div>
            </div>
            <div>
                {
                    display ? (
                        <div onSubmit={onSubmit}>
                            <div className='flex h-full w-full justify-center items-center'>
                                <p className='font-medium text-sm text-black'>Distancia</p>
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    <div className="form-check" onChange={onValueChange}>
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" value="<10" id="distance" />
                                        <label className="form-check-label inline-block font-medium text-sm text-black">
                                            Menos de 10 kilómetros
                                        </label>
                                    </div>
                                    <div className="form-check" onChange={onValueChange}>
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" value="<100" id="distance" />
                                        <label className="form-check-label inline-block font-medium text-sm text-black">
                                            Menos de 100 kilómetros
                                        </label>
                                    </div>
                                    <div className="form-check" onChange={onValueChange}>
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" value=">100" id="distance" />
                                        <label className="form-check-label inline-block font-medium text-sm text-black">
                                            Más de 100 kilómetros
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex h-full w-full justify-center items-center'>
                                <p className='font-medium text-sm text-black'>Duración</p>
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    <div className="form-check" onChange={onValueChange}>
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" value="1 mes" id="duration" />
                                        <label className="form-check-label inline-block font-medium text-sm text-black">
                                            1 mes
                                        </label>
                                    </div>
                                    <div className="form-check" onChange={onValueChange}>
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" value="1 semestre" id="duration" />
                                        <label className="form-check-label inline-block font-medium text-sm text-black">
                                            6 meses
                                        </label>
                                    </div>
                                    <div className="form-check" onChange={onValueChange}>
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" value="1 año" id="duration" />
                                        <label className="form-check-label inline-block font-medium text-sm text-black">
                                            1 año o más
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex h-full w-full justify-center items-center'>
                                <p className='font-medium text-sm text-black'>Categoría</p>
                            </div>
                            <div className="flex justify-center">
                                <div>
                                    {
                                        Categories.map((item, key) => (
                                            <div className="form-check justify-center" onChange={onValueChange} key={key}>
                                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" name={item} value={item} id={key} />
                                                <label className="form-check-label inline-block font-medium text-sm text-black">
                                                    {item}
                                                </label>
                                            </div> 
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex justify-center">
                            <button className="flex h-7 bg-white rounded-lg border-blue-500 border-2 items-center p-3" onClick={onSubmit} type="submit">
                                <p className='font-medium text-sm text-black'>Aplicar Cambios</p>
                            </button>
                            </div>
                        </div>
                    ) : (
                        <div>

                        </div>
                    )
                }
            </div>
            <div>

            </div>
        </>

    );
};

export default Filters;