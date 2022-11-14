import React,{useState} from 'react'
import Propsdata from './propsdata';
import './propscontent.css'


function Data(){
    const [name,setName]=useState("Birds (Cocktail, African Lovebirds, Finch)")
    return (
    <div>
        <Propsdata />
        <h3 className='propshead'><u>Some More Pets Types</u></h3>
        <Propsdata name={name}/>
        
        <button className='propsbutton' onClick={()=>{setName("Dogs (Beagle, German Shepherd, Golden Retriever, Labrador)")}} >View Dogs</button>

    </div>
    );
}

export default Data