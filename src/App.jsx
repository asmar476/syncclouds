import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={ <About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Blog' element={ <Blog/>}/>
      
     <Route path='/Contact' element={ <Contact/>}/>
     
      </Routes>
    </div>
  )
}

export default App