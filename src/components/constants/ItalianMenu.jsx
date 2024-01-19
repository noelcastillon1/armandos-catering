import FoodMenu from "../FoodMenu";

import { italianMenu } from "./index";

const ItalianMenu = () => {
    return (
        <FoodMenu menuName={"Italian"} foodCategory={"Main Dishes"} items={italianMenu.mainDishes} />
    )
}

export default ItalianMenu
