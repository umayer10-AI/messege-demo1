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
        setA(c => [{i,t},...c])
        setIn('');
        setT('');
    }

    const k = (e) => {
        setA(c => c.filter(v => v.i !== e))
    }

    const b = () => {
        setA([])
    }
    
    return (
        <div className='max-w-[80%] mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <form onSubmit={handle} className='flex flex-col gap-3 items-center'>
            <h1 className='text-4xl font-bold text-center w-full'>Add Note</h1>
            <input value={i} onChange={(e) => setIn(e.target.value)} type="text" placeholder='Enter heading' className='border p-2 rounded-lg w-full'/>
            <textarea value={t} onChange={(e) => setT(e.target.value)} type="text" rows={5} placeholder='Write Details' className='border p-2 rounded-lg w-full'/>
            <button type='submit' className="btn btn-info w-full active:scale-97">Add</button>
        </form>
        <div>
            <h1 className='text-4xl font-bold text-center mb-3'>Recent Notes</h1>
            <div className='flex flex-col gap-4 items-center bg-blue-400 p-4 rounded-2xl w-[80%] mx-auto'>
                <button onClick={b} className="btn btn-warning sticky top-10">Clear All</button>
                {
                    arr.map((v,s) => <I1 key={s} {...v} k={k}></I1>)
                }

            </div>
        </div>
    </div>
    );
};

export default Info;