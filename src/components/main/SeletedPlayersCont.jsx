import '../../App.css'
import SelectedPlayer from '../main/selectedPlayer'

function AvailSelectPlayers({players,deleteHandler, isActive, AvailableClick}){
 
    return (
        
        <div className={`flex flex-col gap-4 mx-auto w-11/12 ${isActive?"hidden":''}`}>


             {
                players.map((player ,idx )=> (
                    <SelectedPlayer Player={player} key={idx} deleteHandler={deleteHandler} ></SelectedPlayer>))
             }
            
            {   
                players.length > 0 && (
                <div className='text-start p-4'>
                    
                    <button onClick={AvailableClick} className="btn  border-2 border-black rounded-lg p-1" >
                        <span className="bg-[#E7FE29] block rounded-lg claim p-3 shadow">Add More Player</span>
                    </button>
                </div>
            )}
        </div>
    )
}
export default AvailSelectPlayers;