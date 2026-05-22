
import Navbar from './Navbar'
import { FaBook } from "react-icons/fa";
import student_learn from '@/assets/student_learn.png';

const RRB = () => {
  return (
    <div>
        <Navbar />

<div className='max-w-7xl mx-auto px-8 md:px-10 lg:px-24 xl:px-28 2xl:px-36 mt-40 text-sm transition-all duration-300'>

          <div className="bc_container flex justify-end">
              <div className="breadcrumbs">  <ul>
                                  <li>
                                      <a>
                                          <FaBook />
                                          Courses
                                      </a>
                                  </li>
                                   <li>
                                      <a>
                                          RRB
                                      </a>
                                  </li>
                              </ul></div>
              </div>
               <h2 className="text-[clamp(26px,4.3vw,46px)] font-bold text-[rgb(var(--secondary))] py-5 pb-15">RRB</h2>

               <div>
                                   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                                       <div className='bg-gray-100 rounded-md'>
                                           <div className='p-3 rounded-md relative'>
                                               <img src={student_learn} className='rounded-md w-full h-auto '/>
                                               <p className="flex justify-end my-5 absolute top-0.5 right-5 z-10"><span class="bg-[rgb(var(--primary))] text-white rounded-md p-1 text-[12px]"> Kerala PSC</span></p>
                                               <h3 className='mt-5 font-semibold text-center text-sm'>RRB NTPC</h3>
               <p className='text-sm py-3 text-center'>Qualification: 10th Level</p>
               <p className='text-[12px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero, iusto distinctio eveniet neque velit.</p>
               <p className="flex justify-center my-2 mt-4"><span class="bg-[rgb(var(--secondary))] text-white rounded-md p-2 text-[12px]"> Register Now</span></p>
               
                                           </div>
                                           
                                           </div>
                                              <div className='bg-gray-100 rounded-md'>
                                           <div className='p-3 rounded-md relative'>
                                               <img src={student_learn} className='rounded-md w-full h-auto '/>
                                               <p className="flex justify-end my-5 absolute top-0.5 right-5 z-10"><span class="bg-[rgb(var(--primary))] text-white rounded-md p-1 text-[12px]"> Kerala PSC</span></p>
                                               <h3 className='mt-5 font-semibold text-center text-sm'>RRB Group D</h3>
               <p className='text-sm py-3 text-center'>Qualification: 10th Level</p>
               <p className='text-[12px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero, iusto distinctio eveniet neque velit.</p>
               <p className="flex justify-center my-2 mt-4"><span class="bg-[rgb(var(--secondary))] text-white rounded-md p-2 text-[12px]"> Register Now</span></p>
               
                                           </div>
                                           
                                           </div>
                                              <div className='bg-gray-100 rounded-md'>
                                           <div className='p-3 rounded-md relative'>
                                               <img src={student_learn} className='rounded-md w-full h-auto '/>
                                               <p className="flex justify-end my-5 absolute top-0.5 right-5 z-10"><span class="bg-[rgb(var(--primary))] text-white rounded-md p-1 text-[12px]"> Kerala PSC</span></p>
                                               <h3 className='mt-5 font-semibold text-center text-sm'>RRB ALP Tier - 01</h3>
               <p className='text-sm py-3 text-center'>Qualification: 10th Level</p>
               <p className='text-[12px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero, iusto distinctio eveniet neque velit.</p>
               <p className="flex justify-center my-2 mt-4"><span class="bg-[rgb(var(--secondary))] text-white rounded-md p-2 text-[12px]"> Register Now</span></p>
               
                                           </div>
                                           
                                           </div>
                                      
                                       
                                           
                                         
                                          
                                        
                                        
               
               
                                   </div>
                               </div>



              </div>

    </div>
  )
}

export default RRB