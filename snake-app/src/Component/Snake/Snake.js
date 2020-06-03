import React from 'react'
import './Snake.css'

function Snake({position}) {
    return position.map((coor , index) =>{
        return <div key={index} style={{top : `${coor[0]}%` ,left: `${coor[1]}%` }} className="snake-dot"></div>
    })
}

export default Snake
