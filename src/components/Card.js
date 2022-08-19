import styleCard from '../styles/Card.module.scss'
import React from 'react';

const Card = ({ id, title, imageUrl, price, onPlus, onFavorite, favorited = false, added = false }) => {

	const [isAdded, setIsAdded] = React.useState(added);
	const [isFavorite, setInFavorite] = React.useState(favorited);

	const addClickFavorite = () => {
		setInFavorite(!isFavorite);
		onFavorite({ id, title, imageUrl, price });
	};

	const addClickPlus = () => {
		setIsAdded(!isAdded);
		onPlus({ id, title, imageUrl, price });
	};

	return (
		<div className={styleCard.card}>
			<img src={imageUrl} alt="" className={styleCard.card__img} />
			<button>
				<img onClick={addClickFavorite} src={isFavorite ? "/img/Card/favorite__active.svg" : "/img/Card/favorite.svg"} alt="" className={styleCard.card__favorite} />
			</button>
			<div className={styleCard.card__title}>{title}</div>
			<div className={styleCard.card__items}>
				<div className={styleCard.card__prices}>
					<div className={styleCard.card__price}>цена: </div>
					<span className={styleCard.card__num}>{price}</span>
				</div>
				<button onClick={addClickPlus}>
					<img className={styleCard.card__add} src={isAdded ? "/img/Card/add__active.svg" : "/img/Card/add.svg"} alt="add" />
				</button>
			</div>
		</div>
	)
};

export default Card;