import '../../App.css'
function SelectedPlayer({Player, deleteHandler}){
    return (
       
            <div className='flex flex-row items-center justify-between p-6 border border-[#1313131A] rounded-xl'>
            <div className='flex flex-row gap-8'>
                <img src={Player.img} alt="PlayerIMG" className='w-20 h-20 rounded-full'/>
                <div className='flex flex-col text-center items-start justify-center gap-3'>
                    <h1 className='font-bold text-2xl text-[#131313]'>{Player.name}</h1>
                    <p>{Player.battingStyle}</p>
                </div>
            </div>
            <button className='deleteBTN' onClick={()=>deleteHandler(Player.id)}><img src="https://i.ibb.co.com/dDV1kcB/OIP.jpg" alt="Delete" className='w-5 h-6' /></button>
    </div>
        
    )
}

export default SelectedPlayer