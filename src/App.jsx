import Navbar from './components/Navbar'
import women from "./assets/women.jpg"
import man from "./assets/man.jpg"
import josh from "./assets/josh.jpeg"
import albert from "./assets/albert.webp"
import './App.css'
import { useState } from "react"
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FetchedProfilePage from './pages/FetchedProfilePage'
import AddProfilePage from './pages/AddProfilePage'


//uses class name container and section with id throughoyt idk hwich is better
//she put content of each section in two containers. The section is the one to define the padding and space, while container is maximum width of the content
//simplify this with making a wrapper component
//import card and chnage card 1 and 2 to just be one card



function App() {
  const [profiles, setProfiles] = useState([
    { id: 0, name: "Ava", title: "Developer", email: "", bio: "", image: women },
    { id: 1, name: "Dan", title: "UX Designer", email: "", bio: "", image: man },
    { id: 2, name: "Albert", title: "Manager", email: "", bio: "", image: albert },
    { id: 3, name: "Josh", title: "Design", email: "", bio: "", image: josh },
  ]);

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
  const updateProfiles = (profile) => {
    setProfiles(pre => ([...pre, profile]))
  }
  const filteredProfiles = profiles.filter(profile => (
    (profile.title === title || !title) && (profile.name.toLowerCase().includes(name.toLowerCase()))
  ))

  const [styles, setStyles] = useState("light-mode");
  const toggleStyles = () => {
    setStyles(styles === "light-mode" ? "dark-mode" : "light-mode");
  }

  return (
    <HashRouter>
      <div className={styles}>
        <Navbar toggleStyles={toggleStyles} toggleText={styles} />
        <Routes>
          <Route path ="/" element={<HomePage profiles={profiles} handleChangeTitle={handleChangeTitle} handleSearch={handleSearch} handleClear={handleClear} title={title} name={name}/>} />
          <Route path = "/about" element={<AboutPage />} />
          <Route path = "/fetched-profiles" element={<FetchedProfilePage />}/>
          <Route path = "/add-profile" element={<AddProfilePage />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
