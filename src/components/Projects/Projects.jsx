import {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import data from '../../../db.json'

function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [showReadLess, setShowReadLess] = useState(false);
  
    const loadMoreProjects = () => {
      const newVisibleProjects = visibleProjects + 6;
      setVisibleProjects(newVisibleProjects);
  
      if (newVisibleProjects >= data.allprojects.length) {
        setShowReadLess(true);
      }
    };
  
    const loadLessProjects = () => {
      setVisibleProjects(6);
      setShowReadLess(false);
    };

  return (
    <div className='page ml-[50px] mr-[50px]'>
        <div className=' m-[50px] pt-[50px]'>
            <Navbar/>
            <div className='pt-[50px]'>
                <div className='flex flex-col gap-8'>
                    <h1 className='font-bold text-4xl'>Projects</h1>
                    <h1 className='text-[20px]'>Programming is like unraveling a puzzle, and sometimes the most efficient way to tackle it is to take a step back and consider the broader view. - <em><strong>Mercy Kariuki</strong></em></h1>
                </div> 
                
                <div className='flex flex-row w-full h-full'>
                  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-[50px] mr-[50px]'>
                    {data.allprojects.slice(0, visibleProjects).map((project) => (
                      <div key={project.id} className='scale-100 hover:transition-all hover:duration-500 hover:ease-in-out hover:shadow-xl hover:shadow-slate-400 hover:scale-110 m-[20px] p-[20px] gap-4 rounded-xl' >
                            <div className='flex flex-row justify-between gap-8 mb-[10px]'>
                                <h1 className='font-semibold text-[25px]'>{project.title}</h1>
                                <h1><a href={project.code} className='hover:transition-all hover:duration-500 text-[#a6a8ab] hover:text-[#333333] hover:text-xl hover:underline'>Code</a></h1>
                            </div>
                            <div className='mb-[10px]'>
                                 <p className='text-[20px]'>{project.description}</p>
                             </div>
                            <ul className='mb-[10px] flex flex-col list-disc marker:text-[#FF9B00] gap-1'>
                                <li>{project.tool1}</li>
                                <li>{project.tool2}</li>
                                {/* <li>{project.tool3}</li> */}
                                {/* <li>{project.tool4}</li> */}
                            </ul>
                            <hr className='text-[#a6a8ab] bg-[#a6a8ab] h-[2px] mt-[2px]'/>
                        </div>
                     ))}
                     </div>
                </div>

                {showReadLess && (
                    <div className='flex gap-4'>
                      <button
                        onClick={loadLessProjects}
                        >
                        <h1 className='text-xl text-[#a6a8ab] hover:transition-all hover:duration-500 hover:ease-in-out hover:text-2xl hover:text-[#333333] hover:underline'>
                              Read Less
                        </h1>
                      </button>
                    </div>
                )}

                {visibleProjects < data.allprojects.length && (
                  <div className='flex gap-4'>
                    <button
                      onClick={loadMoreProjects}
                      >
                        <h1 className='text-xl text-[#a6a8ab] hover:transition-all hover:duration-500 hover:ease-in-out hover:text-2xl hover:text-[#333333] hover:underline'>
                            Read More
                        </h1>
                    </button>
                  </div>
                )}
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Projects