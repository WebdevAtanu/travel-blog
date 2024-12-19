import './style.css';

function Intro() {

  return (
    <>
    <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-3 items-center mb-5'>
      <div className="flex justify-center items-center">
        <img src="intro.png" alt="" className='w-1/2'/>
      </div>
      <p className='w-full'>For the avid traveler, the world is an endless canvas of adventure and discovery. Each journey unfolds like a story, filled with vibrant cultures, breathtaking landscapes, and unforgettable experiences. Whether you're trekking through the lush rainforests of the Amazon, marveling at the architectural wonders of ancient cities, or savoring the culinary delights of a bustling street market, every destination offers a unique tapestry of sights, sounds, and flavors.</p>
    </div>
    </>
  )
}

export default Intro;
