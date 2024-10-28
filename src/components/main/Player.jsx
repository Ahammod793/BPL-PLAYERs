import '../../App.css'
function Player({index,avoid, player,choseplayer}){
   
    return (
        <div className='p-6 border border-x-orange-100 rounded-2xl'>
            <img src={player.img} alt="" className='w-full h-60 rounded-2xl' />
            <div className='py-6 flex flex-row items-center gap-4 font-semibold text-xl'>
                <img src={player.img} alt="" className='h-8 w-8 rounded-full' />
                <h2>{player.name}</h2>
            </div>
            <div className='flex flex-row items-center justify-between pb-4'>
                <div className='flex flex-row gap-3 font-medium items-center'>
                    <img src={player.flag} alt={player.country} className='w-6 h-4 rounded'/>
                    <h4>{player.country}</h4>
                </div>
                <h4 className='px-3 py-3 bg-[#1313130d] text-center rounded-2xl'>{player.isAllRounder}</h4>
            </div>
            <hr />
            <div className='flex flex-row justify-between items-center'><h2 className='font-semibold text-xl py-4'>Rating</h2>
            <h2>{player.rating}</h2>
            </div>
            <div className='flex flex-row justify-between'>
                <h2 className='font-semibold text-[16px] text-[#131313]'>Batting Style</h2>
                <h2 className='font-normal text-[14px] text-[#131313]'>{player.battingStyle}</h2>
            </div>
            <div className='flex flex-row justify-between pt-3'>
                <h1 className='font-semibold text-[16px] text-[#131313]'>Price:  {player.price}</h1>
                <button className='border border-[#1313131A] rounded-lg px-4 py-2 text-[14px] font-normal choseBtn' onClick={()=>choseplayer(player)} >Choose Player</button>
            </div>
        </div>
    )
}
export default Player