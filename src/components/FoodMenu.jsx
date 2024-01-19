const FoodMenu = ({ menuName, mainDishes, salads, sides }) => {
    return (
        <article>
            <div className="food-menu">
                <h2 className="menu-name">The {menuName} Menu</h2>
                <p className="main-dishes-subtitle">Main Dishes</p>
                <ul className="main-dishes-ul">
                    {mainDishes.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>: - ${item.price}
                        </li>
                    ))}
                </ul>
                <p className="salads-dishes-subtitle">Salads</p>
                <ul className="salads-dishes-ul">
                    {salads.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>: - ${item.price}
                        </li>
                    ))}
                </ul>
                <p className="sides-dishes-subtitle">Sides</p>
                <ul className="sides-dishes-ul">
                    {sides.map((item, index) => (
                        <li key={index}>
                            <strong>{item.name}</strong>: - ${item.price}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default FoodMenu