import { createContext, useState } from "react";
import women from "../assets/women.jpg";
import man from "../assets/man.jpg";
import josh from "../assets/josh.jpeg";
import albert from "../assets/albert.webp";

const ProfilesContext = createContext();

export const ProfilesProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([
    { id: 0, name: "Ava", title: "Developer", email: "", bio: "", image: women },
    { id: 1, name: "Dan", title: "UX Designer", email: "", bio: "", image: man },
    { id: 2, name: "Albert", title: "Manager", email: "", bio: "", image: albert },
    { id: 3, name: "Josh", title: "Design", email: "", bio: "", image: josh },
  ]);

  const updateProfiles = (profile) => {
    setProfiles(prev => [...prev, profi