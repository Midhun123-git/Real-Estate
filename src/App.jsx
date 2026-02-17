import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Comp1 from './Components/Comp1'
const App = () => {
  return (
   <Routes>
    <Route path="/Comp1" element={<Comp1/>}/>
    </Routes>
  )
}

export default App