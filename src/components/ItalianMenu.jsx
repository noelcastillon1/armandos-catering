import FoodMenu from "./FoodMenu";

import { italianMenuItems } from "./constants/index";

const ItalianMenu = () => {
    return (
        <FoodMenu menuName={"Italian"} mainDishes={italianMenuItems.mainDishes} salads={italianMenuItems.salads} sides={italianMenuItems.sides} />
    )
}

export default ItalianMenu
