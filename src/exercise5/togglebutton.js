import React, { useState } from 'react';
import './togglebutton.css'

function Toggle() {
    const [show,setShow]=useState(true)
    return ( 
        <div className="toggles">
            {
                show?<></>:<><h4>BIRDS !</h4><br/> 
                <h5>Breeds : Cocktail, African Lovebirds, Finch, Lovebirds, Dove, African Parrot </h5></>
                
            }
            {/* <button className='tgbut' onClick={()=>setShow(true)} >Birds</button>
            <button className='tgbut' onClick={()=>setShow(false)} >Dog</button> */}
            <button onClick={()=>setShow(!show)} >Birds Breeds</button> 
        </div>
     );
}

export default Toggle;
