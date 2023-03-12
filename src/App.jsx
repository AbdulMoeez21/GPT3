import react from 'react'
import {  Navbar,
  Hero,
  Partners,
  Blogs,
  Future,
  GetStarted,
  GPT3,
 
  MyApps,
  Request,
  Footer,} from './components/Connections'
import './index.css'

function App() {


  return (
    <div className='gradient__bg'>
    <div className="container-main text_color ">
      
      <Navbar/>
  <Hero/>
  <Partners/>
  <GPT3/>
  <Future/>
  <MyApps/>
  <GetStarted/>

  <Blogs/>
  </div>
  <Request/>
  <Footer/>
 
    </div>
  )
}

export default App
