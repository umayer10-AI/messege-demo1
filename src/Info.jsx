import React, { useState } from 'react';
import I1 from './I1';

const Info = () => {

    const [i, setIn] = useState('');
    const [t, setT] = useState('');
    // const [data, setD] = useState({i:'' ,t:''})
    const [arr, setA] = useState([]);

    const handle = (e) => {
        e.preventDefault();
        // setD({i,t});
        setA(c => [...c,{i,t}])
        setIn('');
        setT('');
    }

    const b = () => {
        setA([])
    }
    
    return (
        <div className='h-screen max-w-[80%] mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <form onSubmit={handle} className='flex flex-col gap-3 items-start'>
            <input value={i} onChange={(e) => setIn(e.target.value)} type="text" placeholder='Enter heading' className='border p-2 rounded-lg w-full'/>
            <textarea value={t} onChange={(e) => setT(e.target.value)} type="text" rows={5} placeholder='Write Details' className='border p-2 rounded-lg w-full'/>
            <button type='submit' className="btn btn-info w-full">Add</button>
        </form>
        <div className='flex flex-col gap-4 items-center bg-pink-400 p-4 rounded-2xl w-[80%] mx-auto'>
            <button onClick={b} className="btn btn-primary">ja beta</button>
            {
                arr.map((v,s) => <I1 key={s} {...v}></I1>)
            }

        </div>
    </div>
    );
};

export default Info;