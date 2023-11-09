import React, { useState } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';

// console.log(tourData)
 function TourList  ()  {
  const [state, setState] = useState(tourData)
   const removeTour = id => {
    console.log(state.id)
    const sortedTour = state.filter(tour=> tour.id !==id );
    setState(sortedTour)
      
   }
    return (
      
        <section className='tour-list'>
          {tourData.map((tour)=>(
            <Tour key={tour.id} tour={tour} removeTour={()=>removeTour(tour.id)}/>
          ))} 
        </section>
    )
 }

 export default TourList;

  

  