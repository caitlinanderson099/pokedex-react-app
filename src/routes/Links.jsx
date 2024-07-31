// Import The Route/Routes
import { Route, Routes } from 'react-router-dom'
// Import the pages
import Home from '../pages/Home'
import SinglePokemon from '../pages/SinglePokemon'

const Links = () => {
  return (
    <>
       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/pokemon/' element={<SinglePokemon/>}/>
       </Routes>
    </>
  )
}

export default Links
