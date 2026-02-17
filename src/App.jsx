import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Header from './Components/Header'
import Card1 from './Components/Card1'
const App = () => {
  return (
   <Routes>
    <Route path="/Header" element={<Header/>}/>
    <Route path="/Card1" element={<Card1/>}/>
    </Routes>
  )
}

export default App