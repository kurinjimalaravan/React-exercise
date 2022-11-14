import React from "react";
import './birds.css'

const Birds = () => {


    return ( 
        <>
        <h2 className="h1">SK PETS WORLD</h2>
        <div className="home">
            <div><img className="img" src="../../assets/4.jpg" alt="bird"/>
        </div>
        <div className="subhome">
            <select className="select">
                <option>Select Bird</option>
                <option>Cocktail</option>
                <option>African Lovebirds</option>
                <option>Finch</option>
            </select><br/><br/>
            
            <button className="button">Submit</button>
        </div>
        </div>
            <p className="p">
                <ul>
                    <li>A Pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock or a laboratory animal.</li>
                    <li> Popular pets are often considered to have attractive appearances, intelligence and relatable personalities, but some pets may be taken in on an altruistic basis and accepted by the owner regardless of these characteristics.</li>
                </ul>
            </p>

        </>
     );
}
 
export default Birds;