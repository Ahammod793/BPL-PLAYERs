import React, { useEffect, useState } from "react";
import '../App.css'
function AvailableAndSelect({available, selected}){
    const maxPlayers = 6;
    const [selectedPlayers, setSelectedPlayers] = useState(0);
    // useEffect((
    //     setSelectedPlayers(maxPlayers+1),
    //     console.log(selectedPlayers)
    // ),[])

    return (
        <div className="flex flex-row justify-between w-11/12 mx-auto py-8">
           <h1 className="availTitle">Available Players</h1>
           <h1 className="selectedTitle">Selected Players ( <span className="SelectedPlayers" >{selectedPlayers}</span>/{maxPlayers})</h1>
           <div className="flex flex-row ">
            <button id="available" onClick={available} className='fixPadding'>Available</button>
            <button id="selected" onClick={selected} className='fixPadding'>Selected (<span id="SelecPlayersNum">0</span>)</button>
           </div>
        </div>
    )
}
export default AvailableAndSelect;