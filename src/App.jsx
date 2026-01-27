import Card from "./components/Card"
import Navbar from './components/Navbar'
import About from './components/About'
import Wrapper from './components/Wrapper'
import Filters from './components/Filters'
import women from "./assets/women.jpg"
import man from "./assets/man.jpg"
import './App.css'
import { useState } from "react"

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

  const titles = [...new Set(profiles.map(profile => profile.title))];

  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleSearch = (event) => {
    setName(event.target.value);
  };
  const handleClear = () => {
    setTitle("")
    setName("")
  };

  const filteredProfiles = profiles.filter(profile => (
    (profile.title === title || !title)&&(profile.name.toLowerCase().includes(name.toLowerCase()))
  ))
  return (
    <>
    <Navbar />
    <Wrapper id="about">
      <About />
    </Wrapper>
    <Wrapper id="profiles">
      <Filters 
      titles={titles}
      title={title}
      name={name}
      handleChange={handleChangeTitle}
      handleSearch={handleSearch}
      handleClick={handleClear}
      />
        <div className="grid">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
            <Card 
            key={profile.id} 
            name={profile.name} 
            title={profile.title} 
            image={profile.image}
            />
          ))
        ): (
            <p>No profiles selected</p>
        )}
        </div>
    </Wrapper>
    </>
    
  );
}

export default App;
