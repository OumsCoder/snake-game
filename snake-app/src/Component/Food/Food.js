import React from 'react'
import './Food.css'

function Food({position}){
    return <div style={{top : `${position[0]}%` , left : `${position[1]}%`}} className="snake-food"></div>   
}

export default Food
