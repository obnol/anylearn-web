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

const Filters = () => {
    const [display, setDisplay] = useState(true);
    return (
        <>
            <div className='flex mt-5 mx-5 flex-row justify-between'>
                <p>Filtrar</p>
                <Button variant="contained" onClick={() => setDisplay(!display)}>
                    <FiFilter />
                </Button>
            </div>
            <div>
                {
                    display ? (
                        <>
                            <div className='flex h-full w-full justify-center items-center'>
                                <p className='font-medium text-sm text-black'>Distancia</p>
                            </div>
                            <div class="flex justify-center">
                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                            <label class="form-check-label inline-block font-medium text-sm text-black" for="flexRadioDefault1">
                                                Menos de 10 kilómetros
                                            </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                            <label class="form-check-label inline-block font-medium text-sm text-black" for="flexRadioDefault2">
                                                Menos de 100 kilómetros
                                            </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                            <label class="form-check-label inline-block font-medium text-sm text-black" for="flexRadioDefault2">
                                                Más de 100 kilómetros
                                            </label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex h-full w-full justify-center items-center'>
                                <p className='font-medium text-sm text-black'>Duración</p>
                            </div>
                            <div className='flex h-full w-full justify-center items-center'>
                                <p className='font-medium text-sm text-black'>Categoría</p>
                            </div>
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