import "../styles/cards.css"
//if you want seperate css files, import it in the specific file. I say do seperate when I style it

const Card = ({name, title, image}) => {

    return (
        <div className="profile-card">
            <div className="top">
                <img src={image} alt={name}/>
            </div>
            <div className="bottom">
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </div>
    );

}

export default Card;