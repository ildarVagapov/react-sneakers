import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import AppContext from './context';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";


function App() {
	const [drawerOpened, setDrawerOpened] = React.useState(false);
	const [items, setItems] = React.useState([]);
	const [itemsDrawer, setItemsDrawer] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [favorites, setFavorites] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	// получаем данные из API
	React.useEffect(() => {
		async function fetchData() {
			const cartResponse = await axios.get("https://62f0d7efe2bca93cd23e1abb.mockapi.io/drawer");
			const favoritesResponse = await axios.get("https://62f0d7efe2bca93cd23e1abb.mockapi.io/favorites");
			const itemsResponse = await axios.get("https://62f0d7efe2bca93cd23e1abb.mockapi.io/items");
			setIsLoading(false);
			setItemsDrawer(cartResponse.data);
			setFavorites(favoritesResponse.data);
			setItems(itemsResponse.data);
		}

		fetchData();
	}, []);

	const onAddToDrawer = (obj) => {
		if (itemsDrawer.find(item => Number(item.id) == Number(obj.id))) {
			axios.delete(`https://62f0d7efe2bca93cd23e1abb.mockapi.io/drawer/${obj.id}`)
			setItemsDrawer(prev => prev.filter(item => Number(item.id) != Number(obj.id)))
		} else {
			axios.post('https://62f0d7efe2bca93cd23e1abb.mockapi.io/drawer', obj)
				.then(res => setItemsDrawer(prev => [...prev, res.data]))
		}

	}

	const onRemoveItem = (id) => {
		axios.delete(`https://62f0d7efe2bca93cd23e1abb.mockapi.io/drawer/${id}`)
		setItemsDrawer(prev => prev.filter(item => item.id != id));
	};

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find(favObj => favObj.id == obj.id)) {
				axios.delete(`https://62f0d7efe2bca93cd23e1abb.mockapi.io/favorites/${obj.id}`)
				setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
			} else {
				const { data } = await axios.post('https://62f0d7efe2bca93cd23e1abb.mockapi.io/favorites', obj)
				setFavorites(prev => [...prev, data]);
			}
		} catch (error) {
			alert('не удалось добавить в фавориты')
		}
	};

	const isItemAdded = (id) => {
		return itemsDrawer.some((obj) => Number(obj.id) === Number(id));
	};


	return (
		<AppContext.Provider value={{
			items,
			itemsDrawer,
			favorites,
			isItemAdded,
			onAddToFavorite,
		}}>
			<div className="wrapper">

				<Header onClickDrawer={() => setDrawerOpened(true)} />

				{drawerOpened && <Drawer items={itemsDrawer} onCloseDrawer={() => setDrawerOpened(false)} onRemove={onRemoveItem} />}

				< Routes >
					<Route path='/react-sneakers' element={
						<Home
							items={items}
							itemsDrawer={itemsDrawer}
							searchValue={searchValue}
							setSearchValue={setSearchValue}
							onChangeSearchInput={onChangeSearchInput}
							onAddToFavorite={onAddToFavorite}
							onAddToDrawer={onAddToDrawer}
							isLoading={isLoading}
						/>
					}>
					</Route>
					<Route path='/Favorite' element={
						<Favorite />
					}>
					</Route>
				</ Routes >
			</div >
		</AppContext.Provider>
	);
}
export default App; 
