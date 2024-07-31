// Import HashRouter and App Css
import { HashRouter } from 'react-router-dom'
import './App.css'
// Import the Nav Components and Links Component
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Links from './routes/Links'
// Import PokeContextProvider
import { PokeContextProvider } from './context/PokeContext'

const  App = () => {

  return (
    <>
      <HashRouter>
        <PokeContextProvider>
          <Header/>
          <Links/>
          <Footer/>
        </PokeContextProvider>
      </HashRouter>
    </>
  )
}

export default App
