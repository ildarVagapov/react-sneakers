import '../styles/Drawer.scss'

const Drawer = ({ onCloseDrawer, onRemove, items = [] }) => {

	return (
		<div className="back">
			<div className="drawer">
				<div className="drawer__header">
					<div className="drawer__title">
						Корзина
					</div>
					<button onClick={onCloseDrawer}>
						<img src="/img/Card/add.svg" alt="" />
					</button>
				</div>
				<div className="drawer__items">
					{items.map((obj) => (
						<div key={obj.id} className="item-drawer">
							<img src={obj.imageUrl} className="item-drawer__img" />
							<div className="item-drawer__items">
								<div className="item-drawer__title">{obj.title}</div>
								<div className="item-drawer__price">{obj.price} руб.</div>
							</div>
							<button>
								<img
									onClick={() => onRemove(obj.id)}
									src="/img/Cart/delete.svg"
									alt="Remove"
									className="item-drawer__delete" />
							</button>
						</div>
					))}
				</div>
				<div className="drawer__footer">
					<div className="footer-drawer__item">
						<div className="footer-drawer__text">Итого:</div>
						<div className="footer-drawer__border"></div>
						<div className='footer-drawer__num' > 0 </div>
					</div>
					{/* <div className="footer-drawer__item">
						<div className="footer-drawer__text">Налог: </div>
						<div className="footer-drawer__border"></div>
						<div className='footer-drawer__num' >21 400</div>
					</div> */}
					<button className="footer-drawer__btn btn">Оформить заказ</button>
				</div>
			</div>
		</div>
	)
};

export default Drawer;