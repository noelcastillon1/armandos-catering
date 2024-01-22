import FoodMenu from "./FoodMenu";
import menuImg from "/Tri Tip Plate.jpg"


import { americanMenuItems } from "./constants/index";

const AmericanMenu = () => {
    return (
        <FoodMenu menuImg={menuImg} isImgFirst={false} menuName={"American"} mainDishes={americanMenuItems.mainDishes} salads={americanMenuItems.salads} sides={americanMenuItems.sides} />
    )
}

export default AmericanMenu
