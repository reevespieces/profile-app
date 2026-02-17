import { useEffect, useState } from "react";
import Filters from "./Filters";
import Card from "./Card";
import { Link } from "react-router-dom";

const FetchedProfiles = () => {
    const [titles, setTitles] = useState([]);
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [profiles, setProfiles] = useState([]);

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
    //fetch title
    useEffect(() => {

        fetch("https://web.ics.purdue.edu/%7Ezong6/profile-app/get-titles.php")
            .then(res => res.json())
            .then(res => setTitles(res.titles))
    }, [])

    //fetch profiles
    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${title}&name=${name}`)
            .then(res => res.json())
            .then(res => setProfiles(res.profiles))
    }, [title, name])

    return (
        <>
            <Filters
                titles={titles}
                title={title}
                name={name}
                handleChange={handleChangeTitle}
                handleSearch={handleSearch}
                handleClick={handleClear}
            />
            <div className="grid">
                {profiles.length > 0 ? (
                    profiles.map((profile) => (
                        <Link key={profile.id} to={`/fetched-profiles/profile/${profile.id}`}>
                        <Card
                            name={profile.name}
                            title={profile.title}
                            image={profile.image_url}
                        />
                        </Link>
                    ))
                ) : (
                    <p>No profiles found</p>
                )}
            </div>
        </>
    );
}
export default FetchedProfiles;