
import React from "react";
import '../App.css';
import { toast,ToastContainer } from "react-toastify";

function AvailableAndSelect({ isAvailable, AvailableClick, SelectedClick,totalSelected}) {
  const maxPlayers = 6;
    if(totalSelected>maxPlayers){
        toast.error('Maximum number of players reached', { position: "top-right" });
    }
  return (
    <div className="flex flex-row justify-between w-11/12 mx-auto py-8">
      <h1 className={isAvailable ? "block" : "hidden"}>Available Players</h1>
      <h1 className={!isAvailable ? "block" : "hidden"}> Selected Players ( <span className="SelectedPlayers">{totalSelected}</span>/{maxPlayers})</h1>
      <div className="flex flex-row border border-stone-300 rounded-xl">
        <button id="available" onClick={AvailableClick} className={`fixPadding ${isAvailable ? 'active' : ''}`}>Available</button>
        <button  id="selected"  onClick={SelectedClick}  className={`fixPadding ${!isAvailable ? 'active' : ''}`}>Selected (<span id="SelecPlayersNum">{totalSelected}</span>)</button>
      </div>
    </div>
  );
}

export default AvailableAndSelect;
