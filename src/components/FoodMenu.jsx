const FoodMenu = ({ menuImg, menuName, mainDishes, salads, sides }) => {
    return (
        <article className="flex flex-col my-14">
            <div className="food-menu px-12">
                <h2 className="menu-name text-5xl md:text-8xl text-gray-300">The {menuName} Menu</h2>
                <p className="main-dishes-subtitle tracking-wider text-primary uppercase">Main Dishes</p>
                <ul className="main-dishes-ul">
                    {mainDishes.map((item, index) => (
                        <li key={index}>
                            {item.name}: - {item.price == null ? "Market Price" : item.price}
                        </li>
                    ))}
                </ul>
                <p className="salads-dishes-subtitle tracking-wide text-primary uppercase">Salads</p>
                <ul className="salads-dishes-ul">
                    {salads.map((item, index) => (
                        <li key={index}>
                            {item.name}
                        </li>
                    ))}
                </ul>
                <p className="sides-dishes-subtitle tracking-wide text-primary uppercase">Sides</p>
                <ul className="sides-dishes-ul">
                    {sides.map((item, index) => (
                        <li key={index}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="menu-img h-32 w-full">
                <div className="max-h-32">
                    <img className="object-contain" src={menuImg} alt="" />
                </div>
            </div>
        </article>
    )
}

export default FoodMenu