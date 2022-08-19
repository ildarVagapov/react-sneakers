import Card from "../components/Card";


function Home({
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToDrawer,
	onAddToFavorite,
	itemsDrawer,
}) {
	return (
		<div className="sneakers">
			<div className="sneakers__container">
				<div className="sneakers__items">
					<div className="sneakers__title">{searchValue ? `Поиск по запросу:  "${searchValue}"` : 'Все кроссовки'}</div>
					<div className="sneakers__input">
						<img className="sneakers__search" src="/img/sneakers/search.svg" alt="" />
						<input onChange={onChangeSearchInput} type="text" placeholder="Поиск..." value={searchValue} />
						{searchValue &&
							<img onClick={() => setSearchValue('')}
								className="sneakers__del"
								src="/img/Cart/delete.svg"
								alt="" />
						}
					</div>
				</div>
				<div className="sneakers__card">
					{items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
						<Card
							added={itemsDrawer.some(obj => Number(obj.id) == Number(item.id))}
							key={index}
							onFavorite={(obj) => onAddToFavorite(obj)}
							onPlus={(obj) => onAddToDrawer(obj)}
							{...item}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home;