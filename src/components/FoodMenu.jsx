const FoodMenu = ({ menuName, foodCategory, items }) => {
    return (
        <article>
            <div className="food-menu">
                <h2 className="menu-name">The {menuName} Menu</h2>
                <p className="food-category">{foodCategory}</p>
                <ul className="main-dishes-ul">
                    {items.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>: - ${item.price}
                        </li>
                    ))}</ul>
            </div>
        </article>
    )
}

export default FoodMenu