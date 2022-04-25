import React from 'react';

const PostCard = ({ card }) => {
  return (
    <div className='relative mx-2 overflow-hidden'>
      <img src={card.image} class='object-cover w-full h-full rounded-md' />
      <div class='absolute w-full py-2.5 bottom-0 inset-x-0  text-white text-base text-center'>
        {card.title}
      </div>
    </div>
  );
};
//export default OfferCard;
export default PostCard;
