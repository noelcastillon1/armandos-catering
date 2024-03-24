const FoodMenu = ({ menuName, mainDishes, salads, sides, menuImg, isImgFirst }) => {
    return (
        <div className="food-menu-wrapper grid">
            <article className="grid col-span-1 md:grid-cols-2 my-8">
                <div className="food-menu md:grid md:grid-cols-2 gap-2 px-12">
                    <h2 className="menu-name col-span-2 w-1/2 py-8 text-6xl lg:text-8xl text-gray-300 z-10">The {menuName} Menu</h2>
                    <div className="main-dishes-container">
                        <p className="main-dishes-subtitle py-4 tracking-widest text-primary uppercase">Main Dishes</p>
                        <ul className="main-dishes-ul leading-loose">
                            {mainDishes.map((item, index) => (
                                <li key={index}>
                                    {item.name} - {item.price == null ? "Market Price" : `$${item.price}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="non-main-container">
                        <div className="salads-container">
                            <p className="salads-dishes-subtitle py-4 tracking-widest text-primary uppercase">Salads</p>
                            <ul className="salads-dishes-ul leading-loose">
                                {salads.map((item, index) => (
                                    <li key={index}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="side-dishes-container">
                            <p className="sides-dishes-subtitle py-4 tracking-widest text-primary uppercase">Sides</p>
                            <ul className="sides-dishes-ul leading-loose">
                                {sides.map((item, index) => (
                                    <li key={index}>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="menu-button-container py-4 text-center md:text-left">
                        <button className="btn btn-primary">Book This Menu</button>
                    </div>
                </div>
                <div className={`menu-img-container h-96 md:h-full w-full ${isImgFirst == true ? "md:order-first" : ""}`}>
                    <img className="object-cover h-full w-full" src={menuImg} alt="" />
                </div>
            </article>
        </div>
    )
}

export default FoodMenu