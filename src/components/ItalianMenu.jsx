import FoodMenu from "./FoodMenu";
import menuImg from "/Pasta Primavera.jpg"


import { italianMenuItems } from "./constants/index";

const ItalianMenu = () => {
    return (
        <FoodMenu menuImg={menuImg} menuName={"Italian"} mainDishes={italianMenuItems.mainDishes} salads={italianMenuItems.salads} sides={italianMenuItems.sides} />
    )
}

export default ItalianMenu
