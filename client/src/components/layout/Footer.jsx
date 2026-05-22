import React from 'react';
import logo from '@/assets/logo.png';
import footer_bg from '@/assets/bg_footer.webp';


const Footer = () => {
  return (
    <>
    <footer className="w-full h-auto bg-no-repeat bg-cover py-10" style={{backgroundImage:`url(${footer_bg})`}}>
        <div className="max-w-7xl px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-5 py-5 mx-auto relative z-10 gap-3" data-aos="fade-up">
            <div className='col-span-1 text-center md:col-span-2 flex flex-col mr-3'>
                        <div className='w-14 bg-white rounded-md mb-3 mx-auto md:ml-0'>
                        <img src={logo} alt="Master Mind Logo"/>
                    </div>
                    <p className='text-white text-[12px] md:text-xs w-auto text-center md:text-start'>Empowering students to achieve their academic goals through quality education and expert guidance.</p>
<div className="justify-center md:justify-start py-5 flex flex-row gap-3">
<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='text-white w-8 h-8 border border-white rounded-full p-1' fill='currentColor'>
<path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/></svg></span>

<span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='text-white w-8 h-8 border border-white rounded-full p-1' fill='currentColor'>
<path d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"/></svg></span>

<span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='text-white w-8 h-8 border border-white rounded-full p-1' fill='currentColor'><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
</span>

<span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='text-white w-8 h-8 border border-white rounded-full p-1' fill='currentColor'>
    <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/></svg>
</span>


</div>

                </div>

          
            <div className='text-center col-span-1 md:col-span-1 max-[768px]:hidden'>
                <p className='text-[rgb(var(--light-blue))] font-semibold pb-2'>Quick Links</p>
                <p className='text-white text-[12px] md:text-xs py-2'>Home</p>
                <p className='text-white text-[12px] md:text-xs py-2'>About</p>
                <p className='text-white text-[12px] md:text-xs py-2'>Courses</p>
                <p className='text-white text-[12px] md:text-xs py-2'>Careers</p>
                



            </div>



            <div className='text-center col-span-1 md:col-span-1 max-[768px]:hidden'>
                    <p className='text-[rgb(var(--light-blue))] font-semibold pb-2'>Courses</p>
                <p className='text-white text-[12px] md:text-xs py-2'>Course 1</p>
                <p className='text-white text-[12px] md:text-xs py-2'>Course 2</p>
                <p className='text-white text-[12px] md:text-xs py-2'>Course 3</p>
                <p className='text-white text-[12px] md:text-xs py-2'>Course 4</p>
                <p className='text-white text-[12px] md:text-xs py-2'>Course 5 </p>

            </div>

              <div className='col-span-1 md:col-span-1'>
                    <p className='text-[rgb(var(--primary))] font-semibold pb-2 text-center md:text-end '>Contact us</p>
                <div className='text-white text-xs py-1 flex flex-row items-center justify-center md:justify-end'>
                    <span className='mr-2 text-center md:text-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='text-white w-7 h-7 border-white rounded-full p-1' fill='currentColor'>
                        <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
                    </span>
                    <p className='text-[12px] md:text-xs'>+91 987654321</p></div>
                <div className='text-white text-xs py-1 flex flex-row items-center justify-center md:justify-end'>
                    <span className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='text-white w-7 h-7 border-white rounded-full p-1' fill='currentColor'>
                        <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/></svg>

                    </span>
                    <p className='text-[12px] md:text-xs'>info@mastermind.in</p>

                </div>
             

            </div>


        </div>

        <div className="footer_bar py-1 pt-5 max-w-7xl px-6 md:px-12 lg:px-20 mx-auto"> 
<div className='w-full border-t border-t-white/40 flex flex-col md:flex-row justify-center md:justify-between pt-5'>
        <div className='text-[12px] md:text-xs text-center md:text-start text-white pb-3'>
<p>©2026 Mastermind. All rights reserved. </p>
        </div>
        <div className='text-[12px] md:text-xs text-white text-center md:text-start'>
            <span className='mx-2'>Privacy Policy</span>
            <span className='mx-2'>Terms of service</span>
            <span>Cookie policy</span>
        </div>
        </div>


</div>




  </footer>
   
    
    </>
  )
}

export default Footer