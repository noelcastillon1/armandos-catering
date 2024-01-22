import FoodMenu from "./FoodMenu";
import menuImg from "/Chicken Cordon Blue.jpg"


import { frenchMenuItems } from "./constants/index";

const FrenchMenu = () => {
    return (
        <FoodMenu menuImg={menuImg} isImgFirst={true} menuName={"French"} mainDishes={frenchMenuItems.mainDishes} salads={frenchMenuItems.salads} sides={frenchMenuItems.sides} />
    )
}

export default FrenchMenu
