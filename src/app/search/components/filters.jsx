import { Button, Checkbox, FormControlLabel, FormGroup, RadioGroup, Radio } from "@material-ui/core";
import { render } from "@testing-library/react";
import { root } from "postcss";

import React, { useState } from "react";
import { FiFilter } from 'react-icons/fi';

var opened = false;


const displayHideFilters = (display) => {
    display ? (
        <div className='flex h-full w-full justify-center items-center'>
            <p className='font-medium text-sm text-white'>Open</p>
        </div>
    ) : (
        <div className='flex h-full w-full justify-center items-center'>
            <p className='font-medium text-sm text-white'>Closed</p>
        </div>
    )
}

const submitValues =
{
    distance: 0,
    duration: 0,
    category: []
};

const onValueChange = (event) => {
    if (event.target.id == "distance") {
        submitValues.distance = event.target.value;
        console.log(submitValues.distance);
    }
    else if (event.target.id == "duration") {
        submitValues.duration = event.target.value;
    }
    else if (event.target.id == "category") {

    }
};

const onSubmit = (event) => {
    if (event.target.id == "distance")
        submitValues.distance = event.target.value;
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
                        <>
                            <div className='flex h-full w-full justify-center items-center'>
                                <p className='font-medium text-sm text-black'>Distancia</p>
                            </div>
                            <div className="flex justify-center">
                                <div onSubmit={onSubmit}>
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
                                <div onSubmit={onSubmit}>
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
                            <button className="btn btn-default" type="submit">
                                Aplicar Cambios
                            </button>
                        </>
                    ) : (
                        <></>
                    )
                }
            </div>
        </>

    );
};

export default Filters;