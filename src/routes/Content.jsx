import React,{useState,useEffect} from 'react';
import Intro from "./Intro.jsx";
import './style.css';
import {Link} from 'react-router-dom'

function Content() {
    const [data, setData] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);
    const ITEMS_PER_LOAD = 8;

    useEffect(() => {
    async function fetcher() {
      const response = await fetch("https://freetestapi.com/api/v1/destinations");
      const jsondata = await response.json();
      setData(jsondata);
      setVisibleItems(jsondata.slice(0, ITEMS_PER_LOAD));
    }
    fetcher();
    },[]);

    const loadMore = () => {
    const newVisibleItems = data.slice(0, visibleItems.length + ITEMS_PER_LOAD);
    setVisibleItems(newVisibleItems);
    };

    return (
        <div>
        <Intro/>
        <h1 className='text-xl bg-gray-200 p-2 mb-5 text-center'>Featured Trips</h1>
        <div className="grid md:grid-cols-4 gap-4 p-5">
            {
                visibleItems.map((item,i)=>{
                    return(
                        
                        <div key={i} className='placeCard rounded-3xl'>
                        <img src={item.image} alt="" className='w-full aspect-video mb-3'/>
                        <p className='text-3xl mx-5 font-bold'>{item.name}</p>
                        <p className='mx-5'>{item.country}</p>
                        <p className='mx-5'>{item.description.slice(0,100)}...</p>
                         <Link to={`/place/${item.name}`} state={item}><p className='m-5 float-right font-bold text-blue-900 flex items-center gap-1 hover:text-blue-600'>KNOW MORE <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                            </svg></p></Link>
                        </div>
                        )
                })
            }

        </div>
        {visibleItems.length < data.length && (
            <div className='text-center p-12'>
        <button onClick={loadMore} className='text-xl border border-black p-1'>Load More</button>
        </div>
        )}
        </div>
    )
}

export default Content