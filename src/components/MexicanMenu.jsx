import FoodMenu from "./FoodMenu";
import menuImg from "/Chicken Chipotle.jpg"


import { mexicanMenuItems } from "./constants/index";

const MexicanMenu = () => {
    return (
        <FoodMenu menuImg={menuImg} isImgFirst={true} menuName={"Mexican"} mainDishes={mexicanMenuItems.mainDishes} salads={mexicanMenuItems.salads} sides={mexicanMenuItems.sides} />
    )
}

export default MexicanMenu
