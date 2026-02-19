import Navbar from './components/Navbar'
import women from "./assets/women.jpg"
import man from "./assets/man.jpg"
import josh from "./assets/josh.jpeg"
import albert from "./assets/albert.webp"
import './App.css'
import { useState, useContext } from "react"
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FetchedProfilePage from './pages/FetchedProfilePage'
import AddProfilePage from './pages/AddProfilePage'
import ProfileDetailPage from './pages/ProfileDetailPage'
import ProfileLayoutPage from './pages/ProfileLayoutPage'
import ModeContext from './context/ModeContext'



function App() {
  const [profiles, setProfiles] = useState([
    { id: 0, name: "Ava", title: "Developer", email: "", bio: "", image: women },
    { id: 1, name: "Dan", title: "UX Designer", email: "", bio: "", image: man },
    { id: 2, name: "Albert", title: "Manager", email: "", bio: "", image: albert },
    { id: 3, name: "Josh", title: "Design", email: "", bio: "", image: josh },
  ]);

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
  };

  const {theme} = useContext(ModeContext)

  return (
    <HashRouter>
      <div className={theme}>
        <Navbar />
        <Routes>
          <Route path ="/" element={<HomePage profiles={profiles} handleChangeTitle={handleChangeTitle} handleSearch={handleSearch} handleClear={handleClear} title={title} name={name}/>} />
          <Route path = "/about" element={<AboutPage />} />
          <Route path = "/fetched-profiles" element={<FetchedProfilePage />}/>
          <Route path = "/fetched-profiles/profile/" element={<ProfileLayoutPage />}>
            <Route path = ":id" element={<ProfileDetailPage />} />
          </Route>
          <Route path = "/add-profile" element={<AddProfilePage updateProfiles={updateProfiles} />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
