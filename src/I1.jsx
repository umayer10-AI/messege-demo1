import React from 'react';

const I1 = ({i,t}) => {
    
    return (
        <div className='w-[70%] border p-4 rounded-2xl bg-yellow-400 text-black h-fit'>
            <h2 className='text-xl font-bold text-green-900'>Umayer: {i || "Umayer"}</h2>
            <p><span className='text-xl font-bold'>Text: </span>{t || "Assalamualaikum guys, How are you all I am fine Thank you so much Visit my website"}</p>
        </div>
    );
};

export default I1;