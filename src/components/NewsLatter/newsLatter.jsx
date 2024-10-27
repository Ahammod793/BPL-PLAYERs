import '../../App.css'
function NewsLatter(){
    return (
        <div className='relative inset-x-0 bottom-[-200px] border-2 p-6 rounded-xl w-11/12 mx-auto '>
                <div className='flex flex-col banner bg-white rounded-xl  items-center justify-center text-center  py-20'>
                    <h1 className='font-bold text-2xl text-[#131313]'>Subscribe to our Newsletter</h1>
                    <p className='text-[#131313B3] font-medium text-xl pt-2 pb-6'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex flex-row items-center justify-center text-center w-4/12 gap-4'>
                        <input type="email" className='border border-[#131313B3] fornt-normal text-[16px] rounded-lg py-4 px-7 w-3/4 mx-auto mt-4' placeholder="Enter your email" />
                        <button className='font-bold text-lg subscribe py-4 px-3 text-[#040404b3] mt-4'>Subscribe</button>
                    </div>
                </div>
                

            </div>
    )
}

export default NewsLatter;