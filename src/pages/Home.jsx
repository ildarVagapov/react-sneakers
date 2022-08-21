import React from 'react';
import Card from "../components/Card";


function Home({
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToDrawer,
	onAddToFavorite,
	isLoading,
}) {


	const renderItems = () => {
		const failteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));

		{
			return (isLoading ? [...Array(8)] : failteredItems).map((item, index) => (
				<Card
					key={index}
					onFavorite={(obj) => onAddToFavorite(obj)}
					onPlus={(obj) => onAddToDrawer(obj)}
					loading={isLoading}
					{...item}
				/>
			))
		}

	}
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
					{renderItems()}
				</div>
			</div>
		</div>
	)
}

export default Home;