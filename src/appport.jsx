import React,{useRef} from 'react';
import './main.css'
import {FaTimes,FaBars,FaPrint,FaFacebook,FaLinkedin,FaInstagram,FaTwitter} from 'react-icons/fa'

const data=[{
  id:1,
  images:'images/bolu.JPG',
  name:'abiola boluwatife',
  word:'Clide has superchanged our team workflow. Ability to maintain visibility on larger businesses,at all time keeps everyone motivated',
},
{
  id:2,
  images:'images/blego.jpg',
  name:'Ogunleye Blessing',
  word:'We have been able to cancel so many other subscription since using clide.There is no more cross-channel confusion and everyone is much more focused. ',
},
{
  id:3,
  images:'images/samuel.jpg',
  name:'kehinde Samuel',
  word:'Clide have superchrged our team workflow. The ability to maintain visibility on larger maintenance at all times keeps everyone motivated',
},
]
function App(){
 const  navRef=useRef()

 const handleClick=()=>{
  navRef.current.classList.toggle('responsible-nav')
 }
  return(
    <section className='bg-slate-100'>
    <header>
<div className='flex items-center'>
<FaPrint className='mr-5  text-blue-400 text-3xl'/>
  <h1 className='sm:text-2xl uppercase lg:text-2xl font-extrabold'>clide</h1>
</div>
<div>
  <nav ref={navRef}>
    <ul>
    <FaTimes className='btn close' onClick={handleClick}/>
      <li><a href='#' className=' hover:text-blue-500 transition duration-800 text-xl cursor-pointer'
       onClick={handleClick}>Pricing</a></li>
       <li><a href='#' className=' hover:text-blue-500 transition duration-800 text-xl cursor-pointer'
        onClick={handleClick}>Product</a></li>
        <li><a href='#' className=' hover:text-blue-500 transition duration-800 text-xl cursor-pointer' 
        onClick={handleClick}>About Us</a></li>
         <li><a href='#' className=' hover:text-blue-500 transition duration-800 text-xl cursor-pointer'
          onClick={handleClick}>Careers</a></li>
          <li><a href='#' className=' hover:text-blue-500 transition duration-800 text-xl cursor-pointer' 
          onClick={handleClick}>Community</a></li>
    </ul>

  </nav>
  </div>
  <div>
  <FaBars className='btn open' onClick={handleClick}/>
  <button className='bg-blue-600 py-3 text-white px-6 rounded-lg
   hover:bg-blue-500  transition duration-700 cursor-pointer sm:hidden lg:block'>Get Started</button>
  </div>
  </header>
  <div >
<div className='flex justify-between sm:flex-col lg:flex-row gap-25 sm:px-4 lg:px-16 mt-20'>
  <div className='sm:mr-2 sm:mb-32 lg:mb-1 lg:mr-32'>
    <h1 className='lg:text-5xl sm:text-3xl font-extrabold capitalize sm:leading-loosed lg:leading-snug tracking-normal mb-10'>Bring everyone together to build better products</h1>
    <p className='font-light leading-relaxed text-gray-500 text-online text-bold tracking-wider sm:text-base lg:text-xl mb-12'>Clide makes it simple for 
    software team to plan day-to-day task while keeping larger
     teams goals in view,And they helps in growing strong communication with other software engineer around the world with ease</p>
    <button className='bg-blue-500 hover:bg-sky-700 duration-700 sm:mt-3 lg:mt-14 cursor-pointer 
    rounded-lg lg:py-4 sm:py-2 sm:px-2 lg:px-6 capitalize text-white'>get started</button>
  </div>
  <div className='sm:mb-24 lg:md-1'>
    <img src='images/1.png' className='images'/>
    <div className='bg-blue-600 py-3 text-white px-6 rounded-lg 
   hover:bg-blue-500  transition duration-700 cursor-pointer text-center mt-4'>-90%</div>
  </div>
</div>
</div>
<div className='flex justify-between sm:flex-col lg:flex-row lg:mt-32 sm:mt-6 sm:px-4 lg:px-16'>
  <div className='lg:mr-24 sm:4'>
    <h1 className='mb-4 sm:text-2xl lg:text-4xl font-extrabold'>What's different about Clide?</h1>
    <p className='text-gray-600 lg:text-2xl sm:text-base'>Clide provide all the functionality your team needs without the complexity. Our software is majorly for
     digital products teams </p>
  </div>
  <div>
    <div>
   
      <div className='flex sm:mt-16 mb-16'>
      <div>
      <button className=' bg-blue-600 rounded-full px-2 py-2 sm:mr-3 lg:mr-4 mb-10 text-white block'>01</button>
      </div>
      <div>
    <h1 className='font-extrabold mb-2 sm:text-xl lg:text-xl xl:text-2xl'>Track company wide progress</h1>
       
       <p className='text-gray-500 xl:xl lg:text-2xl sm:text-base'>See how your day-to-day task fit into the wider vision. Go from tracking progress at the milestone level
       all the way done to the smallest of details.Never lose sight of the bigger picture again</p>
       </div>
      </div>
      <div className='flex  mb-16'>
      <div>
      <button className=' bg-blue-600 rounded-full px-2 py-2 mr-4  text-white block'>02</button>
      </div>
      <div>
    <h1 className='font-extrabold mb-2 sm:text-xl lg:text-2xl'>Advanced built-in reports</h1>
       
       <p  className='text-gray-500  lg:text-xl xl:2xl sm:text-base'> Set internal delivery estimates and track progress towards company goals.
       Our customization help you build out the report you need to keep key stalkholders informed.</p>
       </div>
      </div>
      <div className='flex  '>
      <div>
      <button className=' bg-blue-600 rounded-full px-2 py-2 mr-4 text-white block'>03</button>
      </div>
      <div>
    <h1 className='font-extrabold mb-2 sm:text-xl lg:text-2xl'>Everything you need is in one place</h1>
       
       <p  className='text-gray-500  lg:text-xl xl:2xl sm:text-base'>Stop jumping from one service to another to communicate. store files,track tasks and 
       share document. Clide offers an one-in-all team productivity solution.</p>
       </div>
      </div>
    </div>
  </div>
</div>
<div className='text-center mt-24'>
<div>
  <h1 className='mb-16 text-3xl font-extrabold capitalize'>what's different about clide?</h1>
</div>
<div>
  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-10 sm:px-2 sm:gap-4 lg:gap-10 mb-6 '>
{
  data.map((date)=>{
    return(
      <div key={date.id} className='flex flex-col  bg-white rounded-lg py-10 sm:px-1 lg:px-6 items-center'>
      <div className='max-w-full max-h-full  '>
        <img src={date.images} className='w-16 h-16 mb-6 rounded-full'/>
        </div>
        <h2 className='text-xl  font-extrabold mb-3 capitalize tracking-wide'>{date.name}</h2>
        <p className='text-gray-500'>{date.word}</p>
      </div>
    )
  })
}
  </div>
</div>
</div>
<div className='lg:mt-52 sm:mt-10 text-center sm:mb-36 lg:mb-10'>
<button className=' bg-sky-600 hover:bg-sky-700 duration-800 transition px-4 py-2 rounded-lg text-white'>Get Started</button>
   </div>
   <div className='bg-blue-600'>
<div className='flex items-center justify-between py-16 lg:px-16 sm:px-6'>
<h2 className='text-white lg:text-3xl sm:text-xl mr-6 capitalize'>simplify how your team works today</h2>
<button className='bg-slate-50 capitalize rounded-lg hover:bg-slate-300 text-blue-700 
py-2 lg:px-6 sm:px-6 sm:text-sm lg:-2xltransition duration-800 cursor-pointer'> get start</button>
</div>
   </div>
   <footer className='bg-black text-white'>
    <section className='flex justify-between items-center py-2 lg:px-10 sm:px-4 '>
<div>
<h1 className='lg:text-3xl sm:text-xl flex '><FaPrint className='sm:mr-2 lg:mr-4 text-blue-500'/>Clide</h1>
<div className='flex mt-16 '>
<a href='https://facebook.com/Bolu Abiola'><FaFacebook className='lg:mr-8 sm:mr-2 lg:text-xl sm:text-base cursor-pointer hover:bg-cyan-500 transition duration-800 border-none' /></a>
<a href='https://twitter.com/Boluwatife Abiola'><FaTwitter className='lg:mr-8 sm:mr-2 lg:text-xl sm:text-base cursor-pointer hover:bg-cyan-500 transition duration-800 border-none' /></a>
<a href='https://instagram.com/blaqstix_01'><FaInstagram className='lg:mr-8 sm:mr-2 lg:text-xl sm:text-base cursor-pointer hover:bg-cyan-500 transition duration-800 border-none' /></a>
<a href='https://linkedin.com/boluwatife abiola'><FaLinkedin className='lg:mr-8 sm:mr-2 lg:text-xl sm:text-base cursor-pointer hover:bg-cyan-500 transition duration-800 border-none' /></a>
 
</div>
</div>
<div className=' flex sm:hidden '>
<div className='mr-10'>
<p className='mb-2'>home</p>
<p className='mb-2'>pricing</p>
<p className='mb-2'>products</p>
<p>about</p>
</div>
<div>
  <p>career</p>
    <p>community</p>
      <p>pricing policy</p>
</div>
</div>
<div>  
<div>
<div className='mb-16'>
  <input type='text' className='mr-2 h-6 rounded-lg w-40'/><button className='bg-blue-500 capitalize rounded-lg
   hover:text-white
   hover:bg-blue-600 text-white-400  
  py-1 lg:px-6 sm:px-2 transition duration-800 cursor pointer'>G0</button><br></br>
  </div>
  <small>copyright &copy; 2023, All Rights Reserved</small>
</div>
</div>
    </section>
   </footer>
   </section>

)
}

export default App
