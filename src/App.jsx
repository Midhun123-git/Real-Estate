import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Header from './Components/Header'
import Card1 from './Components/Card1'
import Card2 from './Components/Card2'
import Card3 from './Components/Card3'
import Card4 from './Components/Card4'
import Card5 from './Components/Card5'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
const App = () => {
  return (
   <Routes>
    <Route path="/Header" element={<Header/>}/>
    <Route path="/Card1" element={<Card1/>}/>
    <Route path="/Card2" element={<Card2/>}/>
    <Route path="/Card3" element={<Card3/>}/>
    <Route path="/Card4" element={<Card4/>}/>
    <Route path="/Card5" element={<Card5/>}/>
    <Route path="/Footer" element={<Footer/>}/>
    <Route path="/Banner" element={<Banner/>}/>

    </Routes>
  )
}

export default App