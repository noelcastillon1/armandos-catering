const FoodMenu = ({ menuName, mainDishes, salads, sides, menuImg, isImgFirst }) => {
    return (
        <div className="food-menu-wrapper grid">
            <article className="grid col-span-1 md:grid-cols-2 my-14">
                <div className="food-menu px-12">
                    <h2 className="menu-name py-8 w-1/2 text-5xl md:text-8xl text-gray-300">The {menuName} Menu</h2>
                    <p className="main-dishes-subtitle py-4 tracking-widest text-primary uppercase">Main Dishes</p>
                    <ul className="main-dishes-ul leading-loose">
                        {mainDishes.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.price == null ? "Market Price" : `$${item.price}`}
                            </li>
                        ))}
                    </ul>
                    <p className="salads-dishes-subtitle py-4 tracking-widest text-primary uppercase">Salads</p>
                    <ul className="salads-dishes-ul leading-loose">
                        {salads.map((item, index) => (
                            <li key={index}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <p className="sides-dishes-subtitle py-4 tracking-widest text-primary uppercase">Sides</p>
                    <ul className="sides-dishes-ul leading-loose">
                        {sides.map((item, index) => (
                            <li key={index}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`menu-img-container h-96 md:h-full w-full ${isImgFirst == true ? "order-first" : ""}`}>
                    <img className="object-cover h-full w-full" src={menuImg} alt="" />
                </div>
            </article>
        </div>
    )
}

export default FoodMenu