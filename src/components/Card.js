function Card(props) {
    const item = props.card;

    return (
        <article className="elements__item">
            <div className="elements__trash" onClick={props.onDeleteCardClick}></div>
            <img className="elements__image" src={item.link} onClick={() => props.onCardClick(item)} />
            <div className="elements__info">
                <h2 className="elements__name" title="">{item.name}</h2>
                <div className="elements__like-container">
                    <button type="button" className="elements__like-button"></button>
                    <span className="elements__like-count">{item.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;