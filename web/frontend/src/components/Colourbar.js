/*
*    
* Part of Assignment 2 - COMP90024 course at The University of Melbourne     
*    
* Cluster and Cloud Computing - Team 24     
*     
* Authors:     
*    
*  * Liam Simon (Student ID: 1128453)    
*  * Rejoy Benjamin (Student ID: 1110935)    
*  * Parikshit Diwan (Student ID: 1110497)    
*  * Colin McLean (Student ID: 1139518)    
*  * Matthias Bachfischer (Student ID: 1133751)    
*    
* Location: Melbourne    
*   
*/
import React from 'react'
import './Colourbar.css'

const ColourBar = () => {
    return (
        <div>
            <div id='bar_container'>
                <p id='title'>Installation per Tweet</p>
                <div id='gradient'></div> 
                <p id='lower'>Lower</p>
                <p id='higher'>Higher</p>
            </div>
        </div>
    )
}


export default ColourBar;