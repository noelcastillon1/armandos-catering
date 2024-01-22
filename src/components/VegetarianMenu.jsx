import FoodMenu from "./FoodMenu";
import menuImg from "/Armando's Catering EJPG5113-1.jpg"


import { vegetarianMenuItems } from "./constants/index";

const VegetarianMenu = () => {
    return (
        <FoodMenu menuImg={menuImg} menuName={"Vegetarian"} mainDishes={vegetarianMenuItems.mainDishes} salads={vegetarianMenuItems.salads} sides={vegetarianMenuItems.sides} />
    )
}

export default VegetarianMenu
