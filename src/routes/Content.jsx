import React,{useState,useEffect} from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import Intro from './Intro';

function Content() {
    const [data, setData] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);
    const ITEMS_PER_LOAD = 8;

    useEffect(() => {
    async function fetcher() {
      const response = await fetch("/api/v1/destinations");
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
        <>
        <Intro/>
        {
        visibleItems.length==0?
        <div className='h-[100vh] flex items-center justify-center'>
            <h1 className='text-3xl'>CORS is blocking data</h1>
        </div>
        :
        <div>
        <div className="grid md:grid-cols-4 gap-4 p-5">
            {
                visibleItems.map((item,i)=>{
                    return(
                        <Link to={`/place/${item.name}`} state={item} key={i}>
                        <div className='border border-black cursor-pointer group'>
                        <div className="w-full aspect-video overflow-hidden">
                        <img src={item.image} alt="" className='group-hover:scale-110 duration-100'/>
                        </div>
                        <div className="m-3">
                        <p className='text-3xl font-bold'>{item.name}</p>
                        <p className=''>{item.country}</p>
                        <p className=''>{item.description.slice(0,100)}...</p>
                        <p className='font-bold text-right text-sm mt-2 group-hover:text-blue-900'>KNOW MORE</p>
                        </div>
                        </div>
                        </Link>
                        )
                })
            }

        </div>
        {visibleItems.length < data.length && (
        <div className='text-center p-6'>
        <button onClick={loadMore} className='border border-black px-5 py-1 rounded hover:bg-slate-900 hover:text-white'>Load More</button>
        </div>
        )}
        </div>
        }
        </>
    )
}

export default Content