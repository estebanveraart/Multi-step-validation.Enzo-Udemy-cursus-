import React from 'react'
import './Card.css'

export default function CardBegin(props) {
    return (
        <div className="card">
            <h1>Aide-nous à trouver le plat qui est fait pour toi ! 👨‍🍳</h1>
            <button onClick={() => props.modifyIndex(2)}>COMMENCER</button>
        </div>
    )
}
