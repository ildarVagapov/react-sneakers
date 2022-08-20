import styleCard from '../styles/Card.module.scss'
import React from 'react';
import ContentLoader from 'react-content-loader';

const Card = ({ id, title, imageUrl, price, onPlus, onFavorite, favorited = false, added = false, loading = false }) => {

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
			{loading ? (
				<ContentLoader
					speed={2}
					width={155}
					height={250}
					viewBox="0 0 155 265"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb">
					<rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
					<rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
					<rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
					<rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
					<rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
				</ContentLoader>
			) : (
				<>
					<img src={imageUrl} alt="" className={styleCard.card__img} />
					<button>
						<img onClick={addClickFavorite} src={isFavorite ? "img/Card/favorite__active.svg" : "img/Card/favorite.svg"} alt="" className={styleCard.card__favorite} />
					</button>
					<div className={styleCard.card__title}>{title}</div>
					<div className={styleCard.card__items}>
						<div className={styleCard.card__prices}>
							<div className={styleCard.card__price}>цена: </div>
							<span className={styleCard.card__num}>{price}</span>
						</div>
						<button onClick={addClickPlus}>
							<img className={styleCard.card__add} src={isAdded ? "img/Card/add__active.svg" : "img/Card/add.svg"} alt="add" />
						</button>
					</div>
				</>
			)}
		</div>
	)
};

export default Card;