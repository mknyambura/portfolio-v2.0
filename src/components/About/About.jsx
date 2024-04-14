// import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.scss'
import Footer from '../Footer/Footer'
import dp from '../About/dp.jpg'

function About() {
  return (
    <div className='page'>
        <div className='w-1/2 pt-[50px]'>
            <Navbar/>
            <div className='about flex flex-col'>
                <div className='flex flex-col gap-8 pt-[50px]'>
                    <h1 className='text-[30px] font-bold text-[#333333]'>About Me</h1>
                    {/* <h3 className='text-xl'>
                        <a href='https://www.tees.ac.uk/Postgraduate_courses/Computing_&_Cyber_Security/msc_data_science.cfm' className='underline'>Msc. Applied Data Science (with Advanced Practice)</a> + Big Data & Intelligence Lab Assistant
                        <a href="https://www.tees.ac.uk/" className='underline'> @ Teesside University</a>
                    </h3> */}
                    
                </div>
                <div className='flex flex-row justify-between gap-8 items-center pt-[100px]'>
                    <img src={dp} alt="dp" className='w-1/2 h-1/2'/>
                    <div className='flex flex-col items-center gap-8'>
                        <p>
                            Data Scientist with 1+ years of experience in Analytics, Strategy and Project Management. A Masters in Applied Data Science from Teesside University. Currently at Spot2Spot Network Services. Previously at Teesside, Kenya Revnue Authority (KRA), Civil Registration Services and Kenya Power Lighting Ltd (KPLC).
                        </p>
                        <p>
                            Invloved in East African Society as the Vice Chair of Communication and an Instructor at Microsoft Tesside University PowerBI by Women for Women Fabric Group
                        </p>
                        {/* <a href='/resume'>
                            <button className='text-[18px] text-[#7e7e7e] hover:transition-all hover:duration-500 hover:ease-in-out hover:text-[22px] rounded-[20px] hover:underline hover:text-black ml-[20px] mr-[20px] mt-[10px] mb-[10px]'>Resume</button>
                        </a> */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default About