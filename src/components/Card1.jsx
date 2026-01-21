import women from "../assets/women.png"

const Card1 = () => {
    const name = "Ava";
    const title = "UX designer";

    return (
        <div className="profile-card">
            <div className="top">
                <img src={women} alt={name}/>
            </div>
            <div className="bottom">
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    );

}

export default Card1;