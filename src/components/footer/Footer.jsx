import '../../App.css'
import logoFooter from '../../assets/logo-footer.png'
function Footer(){
    return (
        <div className='footer flex flex-col items-center justify-center'>
            <img src={logoFooter} alt="" className='pt-56 w-36 ' />
            <div className='mx-auto w-11/12 flex flex-row justify-between text-start py-16'>

                <div className='flex flex-col  w-3/12'>
                    <h1 className='font-semibold text-[18px] text-white' >About Us</h1>
                    <p className='font-normal text-[16px] text-[#ffffff]/60 pt-4'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='font-semibold text-[18px] text-white'>Quick Links</h1>
                    <ul className='text-[#ffffff]/60 list-disc pl-5 pt-4'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contuct</a></li>
                    </ul>
                </div>
               
                <div className='flex flex-col justify-between w-4/12'>
                    <h1 className='font-semibold text-[18px] text-white'>Subscribe</h1>
                    <p className='font-normal text-[16px] text-[#ffffff]/60 pt-4'>Subscribe to our newsletter for the latest updates.</p>
                    <div className='flex flex-row items-center justify-center text-center text-[16px]'>
                        <input type="email" className='font-normal text-[16px] rounded-s-2xl py-4 pl-7 w-full mx-auto mt-4' placeholder="Enter your email" />
                        <button className='font-bold  footerSub rounded-e-2xl py-4 px-3 text-[#131313] bg-white w-2/5 mt-4'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='py-6 border-t border-white/30 w-full text-center'><h1 className='text-white'>@2024 Your Company All Rights Reserved.</h1></div> 
        </div>
    )
}

export default Footer;