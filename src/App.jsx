import Card1 from './components/Card1'
import Navbar from './components/Navbar'
import About from './components/About'
import Card2 from './components/Card2'
//import image ur;
//import wrapper
import './App.css'

//uses class name container and section with id throughoyt idk hwich is better
//she put content of each section in two containers. The section is the one to define the padding and space, while container is maximum width of the content
//simplify this with making a wrapper component
//import card and chnage card 1 and 2 to just be one card



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
