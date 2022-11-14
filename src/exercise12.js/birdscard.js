import React from 'react'
import './birdscard.css'

const Card = () => {
    return ( 
        <>
        <h1 className='h1'>SK PETS WORLD</h1>
        <div className='one'>
            <div className='card'>
                <img src='../../assets/1.jpg' alt='card'/>
                <div className='container'>
                    <h3>COCKTAIL</h3>
                    <p>Yellowface</p>
                </div>
                <div><button className='button'>Explore More...</button></div>

            </div>
        
            <div className='card'>
                <img src='../../assets/19.jpg' alt='card'/>
                <div className='container'>
                    <h3>AFRICAN LOVEBIRDS</h3>
                    <p>Pied Blue</p>
                </div>
                <div><button className='button'>Explore More...</button></div>

            </div>

            <div className='card'>
                <img src='../../assets/17.jpg' alt='card'/>
                <div className='container'>
                    <h3>Finch</h3>
                    <p>Zebra finches</p>
                </div>
                <div><button className='button'>Explore More...</button></div>
            </div>
            
        </div>
        
        </>
     );
}
 
export default Card;