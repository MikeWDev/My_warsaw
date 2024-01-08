import $ from 'jquery';
import { useState } from 'react';
const UseIntersecting = () => {
  const [intersectingState, setIntersectingState]=useState(true);
  const obs = new IntersectionObserver(
    function(entiries){
      const ent = entiries[0];
      const bodyElement = $("body");
      
      


    },{
      root:null,
      threshold:0,
      rootMargin:"-90px"
    }
  )
  bodyElement.forEach((el) =>{
    obs.observe(el)
  })
  
  return (  );
}
 
export default UseIntersecting;



ntersecting;