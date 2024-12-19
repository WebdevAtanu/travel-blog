import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Menu from './Menu.jsx';

function Place() {
	const location=useLocation();
    const pl=location.state;
	
	return (
		<>
        <Menu/>
        <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className="grid flex flex-col gap-2 text-justify border border-black">
                <div className="w-full aspect-video overflow-hidden">
                <img src={pl.image} alt="image"/>
                </div>
                <p className='text-xl p-3'>{pl.description}</p>
            </div>
            <table className='border border-black'>
                    <tbody>
                        <tr>
                            <td colSpan='2'><p className='font-bold text-center text-2xl'>About the place</p></td>
                        </tr>
                        <tr>
                            <td className='p-1 border border-black'><p className='font-bold'>Language Used by the People</p></td>
                            <td className='p-1 border border-black'><h6>{pl.language}</h6></td>
                        </tr>
                        <tr>
                            <td className='p-1 border border-black'><p className='font-bold'>Best Time for Visit</p></td>
                            <td className='p-1 border border-black'><h6>{pl.best_time_to_visit}</h6></td>
                        </tr>
                        <tr>
                            <td className='p-1 border border-black'><p className='font-bold'>Top Attractions to Explore</p></td>
                            <td className='p-1 border border-black'><h6>{pl.top_attractions.map((item,i)=><p key={i}>{item}</p>)}</h6></td>
                        </tr>
                        <tr>
                            <td className='p-1 border border-black'><p className='font-bold'>Local Dishes You Will Love</p></td>
                            <td className='p-1 border border-black'><h6>{pl.local_dishes.map((item,i)=><p key={i}>{item}</p>)}</h6></td>
                        </tr>
                        <tr>
                            <td className='p-1 border border-black'><p className='font-bold'>Activities You Can Have</p></td>
                            <td className='p-1 border border-black'><h6>{pl.activities.map((item,i)=><p key={i}>{item}</p>)}</h6></td>
                        </tr>
                    </tbody>
            </table>
        </div>
		</>
	)
}

export default Place