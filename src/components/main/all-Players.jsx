import { useState, useEffect } from 'react'
import '../../App.css'
import '../../../players.json'
import Player from './Player'

function AllPlayers(){
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch("players.json",)
       .then(response => response.json())
       .then(data =>setPlayers(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-8 justify-between w-11/12 mx-auto py-8">
            {
                players.map((player) => (
                    <Player key={player.id} player={player}></Player>
                ))
            }
        </div>
    )
 
}

export default AllPlayers