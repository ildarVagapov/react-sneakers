import Card from "../components/Card";


function Favorite({ items, onAddToFavorite }) {
	return (
		<div className="sneakers">
			<div className="sneakers__container">
				<div className="sneakers__items">
					<div className="sneakers__title">Мои закладки</div>
				</div>
				<div className="sneakers__card">
					{items.map((item, index) => (
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