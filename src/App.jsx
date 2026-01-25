import Card from "./components/Card"
import Navbar from './components/Navbar'
import About from './components/About'
import Wrapper from './components/Wrapper'
import women from "./assets/women.jpg"
import man from "./assets/man.jpg"
import './App.css'

//uses class name container and section with id throughoyt idk hwich is better
//she put content of each section in two containers. The section is the one to define the padding and space, while container is maximum width of the content
//simplify this with making a wrapper component
//import card and chnage card 1 and 2 to just be one card



function App() {
  const profiles = [
    {id: 0, name: "Ava", title: "UX Designer", image: women},
    {id: 1, name: "Dan", title: "Designer", image: man},
    {id: 2, name: "Albert", title: "Manager", image: man},
  ];

  return (
    <>
    <Navbar />
    <Wrapper id="about">
      <About />
    </Wrapper>
    <Wrapper id="profiles">
        <div className="grid">
          {profiles.map(profile => (
            <Card 
            key={profile.id} 
            name={profile.name} 
            title={profile.title} 
            image={profile.image} 
            />
          ))}
        </div>
    </Wrapper>
    </>
    
  );
}

export default App;
