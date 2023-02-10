import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { Routes,Route } from 'react-router-dom'
import Careers from './pages/Careers'


export const maintenancePage =()=>{
  return (
    <h1>Under Maintenance</h1>
  )
}

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={ <About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Careers' element={<Careers/>}/>
        <Route path='/Blog' element={ <Blog/>}/>
        <Route path='/Contact' element={ <Contact/>}/>
        {/* <Route path='*' element={<maintenancePage/>}/> */}
     
      </Routes>
    </div>
  )
}

export default App