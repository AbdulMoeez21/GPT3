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
    <div className='bg_color'>
    <div className="container-main bg_color text_color">
      
      <Navbar/>
  <Hero/>
  <Partners/>
  <GPT3/>
  <Future/>
  <MyApps/>
  <GetStarted/>

  <Blogs/>
  <Request/>
  <Footer/>
  </div>
    </div>
  )
}

export default App
