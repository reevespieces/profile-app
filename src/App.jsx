import Card1 from './components/Card1'
import Navbar from './components/Navbar'
import About from './components/About'
import Card2 from './components/Card2'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <About />
    <div className="Profile-card-container">
       <Card1 />
       <Card2 />
    </div>
    </>
    
  )
}

export default App;
