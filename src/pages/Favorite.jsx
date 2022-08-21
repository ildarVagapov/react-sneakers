import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';


function Favorite() {
	const { favorites, onAddToFavorite } = React.useContext(AppContext);

	return (
		<div className="sneakers">
			<div className="sneakers__container">
				<div className="sneakers__items">
					<div className="sneakers__title">Мои закладки</div>
				</div>
				<div className="sneakers__card">
					{[favorites].map((item, index) => (
						<Card
							key={index}
							favorited={true}
							onFavorite={onAddToFavorite}
							{...item}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Favorite;