import '../../App.css'
import SelectedPlayer from '../main/selectedPlayer'
function AvailSelectPlayers({players}){
    return (
        <div className='flex flex-col gap-4 mx-auto w-11/12'>
            {
                players.map(player => (
                    <SelectedPlayer Player={player}></SelectedPlayer>
                ))

            }
            
        </div>
    )
}
export default AvailSelectPlayers;