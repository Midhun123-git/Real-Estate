import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Header from './Components/Header'
import Card1 from './Components/Card1'
import Card2 from './Components/Card2'
const App = () => {
  return (
   <Routes>
    <Route path="/Header" element={<Header/>}/>
    <Route path="/Card1" element={<Card1/>}/>
    <Route path="/Card2" element={<Card2/>}/>
    </Routes>
  )
}

export default App