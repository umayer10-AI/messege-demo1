import React from 'react';

const I1 = ({i,t,k}) => {
    
    return (
        <div className='w-[70%]'>
            <h2 className='font-bold text-black'>New</h2>
            <div className=' border p-4 rounded-2xl bg-[url(https://icon2.cleanpng.com/20180321/uvw/avea15v9t.webp)] bg-center text-black h-fit'>
            <h2 className='text-xl font-bold text-green-900'>Title: {i || "Umayer"}</h2>
            <p><span className='text-xl font-bold'>Text: </span>{t || "Assalamualaikum guys, How are you all I am fine Thank you so much Visit my website"}</p>
            <div className='text-right'>
                <button onClick={() => k(i)} className='btn btn-primary mt-3'>delete</button>
            </div>
        </div>
        </div>
    );
};

export default I1;