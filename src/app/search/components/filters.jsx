import { Button } from "@material-ui/core";
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