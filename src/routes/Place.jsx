import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Menu from './Menu.jsx';

function Place() {
	const location=useLocation();
    const pl=location.state;
	
	return (
		<>
        <Menu/>
			<div className='about p-5'>
                    <div className="flex flex-col md:flex-row">
                        <p className='text-xl p-3'>{pl.description}</p>
                        <img src={pl.image} alt="" className='w-full md:w-1/2 aspect-video rounded-3xl'/>
                        </div>
                        <div className="flex justify-center mt-3">
                            <table className='w-full md:w-3/4'>
                                <tbody>
                                    <tr>
                                        <td><p className='font-bold'>Language Used by the People</p></td>
                                        <td><h6>{pl.language}</h6></td>
                                    </tr>
                                    <tr>
                                        <td><p className='font-bold'>Best Time for Visit</p></td>
                                        <td><h6>{pl.best_time_to_visit}</h6></td>
                                    </tr>
                                    <tr>
                                        <td><p className='font-bold'>Top Attractions to Explore</p></td>
                                        <td><h6>{pl.top_attractions.map((item,i)=><p key={i}>{item}</p>)}</h6></td>
                                    </tr>
                                    <tr>
                                        <td><p className='font-bold'>Local Dishes You Will Love</p></td>
                                        <td><h6>{pl.local_dishes.map((item,i)=><p key={i}>{item}</p>)}</h6></td>
                                    </tr>
                                    <tr>
                                        <td><p className='font-bold'>Activities You Can Have</p></td>
                                        <td><h6>{pl.activities.map((item,i)=><p key={i}>{item}</p>)}</h6></td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
            </div>
		</>
	)
}

export default Place