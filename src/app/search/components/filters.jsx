import { Button } from "@material-ui/core";
import { render } from "@testing-library/react";
import { root } from "postcss";
import React from "react";
import { FiFilter } from 'react-icons/fi';

var opened = false;

const Filters = () => {
    return (
        <div className='flex mt-5 mx-5 flex-row justify-between'>
            <p>Filtrar</p>
            <Button variant="contained" onClick={() => {
                opened = !opened;
                opened ? (
                    <div className='flex h-full w-full justify-center items-center'>
                        <p className='font-medium text-sm text-white'>Open</p>
                    </div>                   
                ) : (
                    <div className='flex h-full w-full justify-center items-center'>
                        <p className='font-medium text-sm text-white'>Closed</p>
                    </div>
                )
            }}>
                <FiFilter />
            </Button>

        </div>
    );
};

export default Filters;