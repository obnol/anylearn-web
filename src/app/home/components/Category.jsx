import React from 'react';
import PostCard from './PostCard'
import { View } from 'react';



const Category = (category) => {
    var data = category.category.cards;
    
    return (
        <div container>
            <div className='flex flex-column justify-between'>
                <p className='font-medium text-xl w-3/4'>
                    {category.category.type}
                </p>
                <p className='font-light text-sm text-gray-500'>ver más</p>
            </div>
            <div container className='flex flex-row h-36 mt-4 justify-between overflow-x-scroll'
                >
                {
                    data.map((card, index) => {
                        return (
                            <PostCard key={index} card={card} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Category;