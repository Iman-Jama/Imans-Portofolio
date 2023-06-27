import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience,Hero, Navbar, Tech, Works, StarsCanvas} from './components'



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div>
        <Navbar />
        <Hero />

      </div>
      <About />
      <Experience />
      <Tech />
      <Works />

      <div className="relative z-0">
        <contact />
        <StarsCanvas />

      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
