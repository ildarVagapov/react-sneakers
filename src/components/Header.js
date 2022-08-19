import { Link } from 'react-router-dom';


const Header = (props) => {
	return (
		<header className="header">
			<div className="header__container">
				<div className="header__body">
					<Link to='/'>
						<a href="#" className="header__logo logo-header">
							<img src="/img/header/header__logo.png" alt="" className="logo-header__img" />
							<div className="logo-header__items">
								<div className="logo-header__title">
									REACT SNEAKERS
								</div>
								<div className="logo-header__text">
									Магазин лучших кроссовок
								</div>
							</div>
						</a>
					</Link>
					<div className="header__items">
						<div onClick={props.onClickDrawer} className="header__bascet bascet-header">
							<img className="bascet-header__img" src="/img/header/header__bascet.svg" alt="" />
							<div className="bascet-header__text">0 руб.</div>
						</div>
						<Link to='/Favorite'>
							<img src="/img/header/header__favorite.svg" alt="" className="header__favorite" />
						</Link>
						<img src="/img/header/header__user.svg" alt="" className="header__user" />
					</div>
				</div>
			</div>
		</header>
	)
};

export default Header;