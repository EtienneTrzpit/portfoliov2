import './index.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Presentation from './components/Presentation'
import SavoirFaire from './components/SavoirFaire'
import Projets from './components/Projets'
import Certifications from './components/Certifications'
import Slider from './components/Slider'

function App() {
  
  return (
    <>
      <Header />
      <NavBar />
      <Presentation />
      <SavoirFaire />
      <Projets />
      <Certifications />
      <Slider />
    </>
  )
}

export default App
