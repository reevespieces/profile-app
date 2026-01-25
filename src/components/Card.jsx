import "../styles/cards.css"
//if you want seperate css files, import it in the specific file. I say do seperate when I style it

const Card = ({name, title, image}) => {

    return (
        <div className="profile-card">
            <div className="top">
                <img src={image} alt={name}/>
            </div>
            <div className="bottom">
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    );

}

export default Card;